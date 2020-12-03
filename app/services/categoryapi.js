const serviceBaseUrlCategory = "http://lebonangle.test/index.php/api/categories"

class Categoryapi {

    getAllCategories() {
        return fetchJSON(serviceBaseUrlCategory)
    }

    getCategoryById(id) {
        return fetchJSON(`serviceBaseUrlCategory/${id}`)
    }

    getCategoryByAdvert(chaine) {
        return fetchJSON(`http://lebonangle.test${chaine}`)
    }

}