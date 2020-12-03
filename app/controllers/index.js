class IndexController extends BaseController {

    constructor() {
        super();
        this.cardsindex = document.getElementById('cardsindex')
        this.displayAllAdverts()
    }
    displayAdvert(idAdvert) {
        this.idAdvert = idAdvert
        navigate('showadvert')
    }
    async displayAllAdverts() {
        let content = ''
        try {
            const adverts = await this.modelAdvert.getAllAdverts()
            for (const advert of adverts) {
                const createdAtFormat = advert.createdAt.toLocaleDateString()
                const publishedAtFormat = advert.publishedAt.toLocaleDateString()
                content += `
                                <div class="col s3 m3">
                                    <div class="card">
                                        <div class="card-image">
                                            <img id="imgAdvert" src="http://lebonangle.test/picture/${advert.pictures[0].path}">
                                            <span class="card-title">${advert.title}</span>
                                        </div>
                                    <div class="card-content">
                                        <p style="font-family: 'Arial'"> Categorie: ${advert.category.name}</p>
                                        <p style="font-family: 'Arial'">Prix: ${advert.price}€</p>
                                        <p style="font-family: 'Arial'">Contact: ${advert.email}</p>
                                    </div>
                                    <div class="card-action">
                                        <a type="button" onclick="window.indexController.displayAdvert(${advert.id})">Voir plus</a>
                                    </div>
                                    </div>
                                </div>
                            `
            }
            this.cardsindex.innerHTML = content
        } catch (err) {
                console.log(err)
                this.displayServiceError()
            }
        }
}
window.indexController = new IndexController()