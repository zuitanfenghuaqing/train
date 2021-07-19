function request (url, method = 'GET'){
    return new Promise((resolve, reject)=>{
        let params = { method }
        params.headers = {
            ['Content-Type']:'application/json; charset=UTF-8'
          }
        fetch(url, params).then(data=> {
            if(res.status >= 200 && res.status < 300 ) return res
            throw res
        }).then(data=>{ 
            return data.json()
        }).then(data=>{
                console.log(data)
            })
    })
}