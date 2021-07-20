function request (url, method = 'GET'){
    return new Promise((resolve, reject)=>{
        let params = { method }
        params.headers = {
            ['Content-Type']:'application/json; charset=UTF-8'
          }
        fetch(url, params).then(data=> {
            if(data.status >= 200 && data.status < 300 ) return data
            throw data
        }).then(data=>{ 
            return data.json()
        }).then(data=>{
            resolve(data)
        }).catch(err=> reject(err))
    })
}