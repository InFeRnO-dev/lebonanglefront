class ModelAdvert {

    constructor() {
        this.apiadvert = new Advertapi()
        this.apicategory = new Categoryapi()
        this.apipicture = new Pictureapi()
    }

    async getAllAdverts(category) {
        let adverts = []
        for (let advert of await this.apiadvert.getAllAdverts(category)) {
            advert.createdAt = new Date(advert.createdAt)
            advert.publishedAt = new Date(advert.publishedAt)
            advert.category = Object.assign(new Category(), await this.apicategory.getCategoryByAdvert(advert.category))
            let tab = []
            for (let picture of advert.pictures) {
                tab.push(Object.assign(new Picture(), await this.apipicture.getPictureByAdvert(picture)))
            }
            advert.pictures = tab
            adverts.push(Object.assign(new Advert(), advert))
        }
        return adverts
    }

    async getAdvertById(idAdvert) {
        let advert = Object.assign(new Advert(), await this.apiadvert.getAdvertById(idAdvert))
        advert.createdAt = new Date(advert.createdAt)
        advert.publishedAt = new Date(advert.publishedAt)
        advert.category = Object.assign(new Category(), await this.apicategory.getCategoryByAdvert(advert.category))
        let tab = []
        for(let picture of advert.pictures)
        {
           tab.push(Object.assign(new Picture(), await this.apipicture.getPictureByAdvert(picture)))
        }
        advert.pictures = tab
        return advert
    }
    async insert(obj) {
        return await this.apiadvert.insert(obj)
    }
}