
function onStatus (res){
    if(res.status >= 200 && res.status < 300 ) return res
    throw res
  }
  function parseJson (res){
    return res.json()
  }

//封装fetch
export default function request (url, param, method = 'GET'){
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
        if(window.location.hostname !== 'localhost') url = `https://api.github.com/search${url}`
        fetch(url, params)
            .then(onStatus)
            .then(parseJson)
            .then(data=>{
                resolve(data)
            })
            .catch(err=>{
                reject(err)
            })
    })
}