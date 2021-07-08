const axios = require('axios')

const DATA_URLS = [
    "https://s3.amazonaws.com/eight-public/challenge/2228b530e055401f81ba37b51ff6f81d.json",
    "https://s3.amazonaws.com/eight-public/challenge/d6c1355e38194139b8d0c870baf86365.json",
    "https://s3.amazonaws.com/eight-public/challenge/f9bf229fd19e4c799e8c19a962d73449.json",
]

module.exports = {
    fetchSleepData: async (_, response) =>{
        try{
            const data = await Promise.all( 
                DATA_URLS.map(async(url)=>{
                    const payload = await axios.get(url)
                    return payload.data
                })
            )
            console.log(data)
            response.status(201).send({ data })
        }catch(error){
            response.status(500).send({error})
        }
    }
}