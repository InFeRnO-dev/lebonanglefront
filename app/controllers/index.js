class IndexController extends BaseController {

    constructor() {
        super();
        this.cardsindex = document.getElementById('cardsindex')
        this.indexcategory = document.getElementById('SelectCategoryIndex')
        this.selectvalue = "all"
        this.displayAllAdverts()
        this.displayCategories()
    }
    displayAdvert(idAdvert) {
        this.idAdvert = idAdvert
        navigate('showadvert')
    }
    async displayAllAdverts() {
        let indexCategory = "/index.php/api/categories/" + this.selectvalue
        if(this.selectvalue === "all")
        {
            indexCategory = this.selectvalue
        }

        let content = ''
        try {
            const adverts = await this.modelAdvert.getAllAdverts(indexCategory)
            for (const advert of adverts) {
                const createdAtFormat = advert.createdAt.toLocaleDateString()
                const publishedAtFormat = advert.publishedAt.toLocaleDateString()
                //<span style="font-family: Impact;color: black" class="card-title">${advert.title}</span>
                content += `
                                <div class="col s3 m4">
                                    <div id="cardindex" class="card">
                                        <div class="card-image">
                                            <img id="imgAdvert" src="http://lebonangle.test/picture/${advert.pictures[0].path}">
                                        </div>
                                    <div class="card-content">
                                        <p style="font-family: Impact;color: black" class="card-title">${advert.title}</p>
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

    async displayCategories() {
        try {
            let content = '<option value="all">Toutes catégories</option>'
            for(const category of await this.modelCategory.getAllCategories()) {
                content += `<option value="${category.id}">${category.name}</option>`
            }
            this.indexcategory.innerHTML = content
            M.FormSelect.init(this.indexcategory)
        }
        catch (err) {
            console.log(err.message)
        }
    }
    valueSelect() {
        this.selectvalue = this.indexcategory.value
        this.displayAllAdverts()
    }
}
window.indexController = new IndexController()