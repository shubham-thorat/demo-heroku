const express = require('express') 
const cors = require('cors') 
const mongoose = require('mongoose') 
const dotenv = require('dotenv') 
const path = require('path') 
const app = express()
const {User} = require('./models/userschema.js') 

dotenv.config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection
db.on('error' , err =>{
    console.log(err)
})
db.on('connected' , ()=>{
    console.log('Connected to Database')
})

app.get('/users',async (req,res)=>{
    User.find((error , data)=>{
        if(error) console.log(error)
        else {
            // console.log(data)
            res.status(200).json(data)
        }
    })
})

app.post('/users',(req,res)=>{
    const data = req.body;
    const user = new User(data);
    user.save()
    res.status(200).json(data)
})

//server static assets

if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})

