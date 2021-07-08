
function onStatus (res){
    if(res.status >= 200 && res.status < 300 ) return res
    throw res
  }
  function parseJson (res){
    return res.json()
  }
function request (url, param, method = 'GET'){
    return new Promise((resolve, reject)=>{
        let params = { method }
        if(method !== 'GET'){
            params = {
                ...params,
                body:  JSON.stringify(param || {})
            }
        }
        params.headers = {
            ['Content-Type']:'application/json; charset=UTF-8'
          }
        fetch(url, params)
            .then(onStatus)
            .then(parseJson)
            .then(data=>{
                console.log(data)
                // resolve(data)
            })
            .catch(err=>{
                // reject(err)
            })
    })
}