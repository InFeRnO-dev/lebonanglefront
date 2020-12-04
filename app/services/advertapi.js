const serviceBaseUrlAdvert = "http://lebonangle.test/index.php/api/adverts"

class Advertapi {

    getAllAdverts(category) {
        if(category === "all"){
            return fetchJSON(`${serviceBaseUrlAdvert}?state=published`)
        }
        else {
            return fetchJSON(`${serviceBaseUrlAdvert}?state=published&category=${category}`)
        }
    }
    getAdvertById(id) {
        return fetchJSON(`${serviceBaseUrlAdvert}/${id}`)
    }
    insert(obj) {
        return fetch(serviceBaseUrlAdvert, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        })
    }
}