function request (url, params, method = 'GET'){
    return new Promise((resolve, reject)=>{
        fetch(url,{
            method
        }).then(data=> data.json())
            .then(data=>{
                console.log(data)
            })
    })
}