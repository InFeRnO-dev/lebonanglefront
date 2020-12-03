const serviceBaseUrlAdvert = "http://lebonangle.test/index.php/api/adverts"

class Advertapi {

    getAllAdverts() {
        return fetchJSON(serviceBaseUrlAdvert)
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