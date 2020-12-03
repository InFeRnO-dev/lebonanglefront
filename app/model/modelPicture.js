class ModelPicture {

    constructor() {
        this.apipicture = new Pictureapi()
    }
    async getAllPictures() {
        let pictures = []
        for (let picture of await this.apipicture.getAllPictures()) {
            pictures.push(Object.assign(new Picture(), picture))
        }
        return pictures
    }
    async insert(obj) {
        return Object.assign(new Picture(), await this.apipicture.insert(obj))
    }
}