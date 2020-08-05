const { resolve, reject } = require("core-js/fn/promise");

import axios from 'axios'

function request (url, data = {}, method = 'GET') {
    return new Promise ((resolve, reject) => {
        axios({
            url: url,
            data: data,
            method: method,
            header: { 'Content-Type': 'application/json' }
        }).then ((res) =>{
            return resolve(res)
        }).catch ((res) =>{
            return reject(res)
        })
    })
}

module.exports = {
    request
}