import axios from 'axios'

// const url = 'http://localhost:5500/users'
const url = 'https://shubham-heroku-demo.herokuapp.com/users'
export const sendData = (user) => {
    axios.post(url, user)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}

export const receiveData = async (setusers) => {
    axios.get(url)
        .then(response => {
            setusers(response.data)
        })
        .catch(error => {
            console.log(error)
        })
}
