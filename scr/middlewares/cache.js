
const {sendAPI} = require('../service/sendAPI')
const redis = require('redis');
const client = redis.createClient();
client.connect();

exports.cache = async (req, res, next) => {
    let payload ;
    const dataR = await client.get(req.url) 
    req.redis = client
    if (dataR) {  
        payload = JSON.parse(dataR)
        sendAPI(res, 200, "ok", payload)
      }else{
        next();
      }
}  