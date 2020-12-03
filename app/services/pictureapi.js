const serviceBaseUrlPicture = "http://lebonangle.test/index.php/api/pictures"

class Pictureapi {


    getPictureByAdvert(chaine) {
        return fetchJSON(`http://lebonangle.test${chaine}`)
    }

    insert(obj) {
        return new Promise((resolve, reject) => fetch(serviceBaseUrlPicture,{
            body: obj,
            method: "POST",
        }).then(res =>{
            if(res.status === 201){
                resolve(res.json())
            } else{
                reject(res.status)
            }
        }).catch(err => reject(err)));
    }
}