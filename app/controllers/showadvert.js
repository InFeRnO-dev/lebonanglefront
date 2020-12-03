class ShowAdvertController extends BaseController{

    constructor() {
        super();
        this.displayPictures = $('#DisplayPictures')
        this.displayAllAdverts()
    }

    async displayAllAdverts() {
        let content = ''
        try {
            let advert = await this.modelAdvert.getAdvertById(indexController.idAdvert)
            const createdAtFormat = advert.createdAt.toLocaleDateString()
            const publishedAtFormat = advert.publishedAt.toLocaleDateString()
                content += `<h2 style="text-align: center">${advert.title}</h2>`
            for(const picture of advert.pictures) {
                content += `
                                <img src="http://lebonangle.test/picture/${picture.path}">
                            `
            }
            this.displayPictures.innerHTML = content
        } catch (err) {
            console.log(err)
            this.displayServiceError()
        }
    }
}
window.showAdvertController = new ShowAdvertController()