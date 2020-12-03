class ShowAdvertController extends BaseController{

    constructor() {
        super();
        this.displayPictures = document.getElementById('DisplayPictures')
        this.displayAdvert = document.getElementById('DisplayAdvert')
        this.displayTitle = document.getElementById('DisplayTitle')
        this.displayAllAdverts()
    }
    async displayAllAdverts() {
        let contenttitle = ''
        let contentadvert = ''
        let contentimage = ''
        try {
            let advert = await this.modelAdvert.getAdvertById(indexController.idAdvert)
            const createdAtFormat = advert.createdAt.toLocaleDateString()
            const publishedAtFormat = advert.publishedAt.toLocaleDateString()
                 contenttitle += `<p style="font-family: Arial Black; font-size:200%;text-align: center">${advert.title}</p>`
                 contentadvert +=`<p style="font-family: Arial; font-size: larger">Annonce Publiée par <b>${advert.author}</b>, le ${publishedAtFormat}</p>
                                  <p style="font-family: Arial">Adresse mail de contact : <i>${advert.email}</i></p>
                                  <p style="font-family: Georgia">Description du produit :<br/><br/><i>${advert.content}</i></p>
                                  <p style="font-family: Arial">Prix de vente : ${advert.price}€</p>
                                  <p style="font-family: Arial">Image du produit :<br></p>
                                 `
            for(const picture of advert.pictures) {
                contentimage += `
                                <img id="imgShow" src="http://lebonangle.test/picture/${picture.path}">
                                `
            }
            this.displayTitle.innerHTML = contenttitle
            this.displayAdvert.innerHTML = contentadvert
            this.displayPictures.innerHTML = contentimage

        } catch (err) {
            console.log(err)
            this.displayServiceError()
        }
    }
}
window.showAdvertController = new ShowAdvertController()