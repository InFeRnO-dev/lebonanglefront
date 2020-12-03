class AddAdvert extends BaseController{
    constructor() {
        super();
        this.selectcategory = $('#SelectCategory')
        this.displayCategories()
    }
    async addAdvert() {
        let title = document.getElementById('Titre').value.trim()
        let author = document.getElementById('Auteur').value.trim()
        let email = document.getElementById('Email').value.trim()
        let category = "/index.php/api/categories/" + document.getElementById('SelectCategory').value

        let price = document.getElementById('Prix').value * 1
        let content = document.getElementById('Description').value.trim()
        let pictures = document.getElementById('Images').files
        let tabpictures = []

        for(let picture of pictures){
            let Data = new FormData()
            Data.append('file', picture)
            let insertpicture = await this.modelPicture.insert(Data)
            console.log(insertpicture)
            tabpictures.push("/index.php/api/pictures/" + insertpicture["id"])
        }
        console.log(tabpictures)
        if(title === '' || title === null){
            this.toast("Le champ titre n'a pas été saisis")
            return
        }
        if(author === '' || author === null){
            this.toast("Le champ auteur n'a pas été saisis")
            return
        }
        if(email === '' || email === null){
            this.toast("Le champ email n'a pas été saisis")
            return
        }
        if(category === '' || category === null){
            this.toast("Le champ catégorie n'a pas été saisis")
            return
        }
        if(price === '' || price === null){
            this.toast("Le champ prix n'a pas été saisis")
            return
        }
        if(content === '' || content === null){
            this.toast("Le champ description n'a pas été saisis")
            return
        }
        if(title.length < 3 || title.length > 100){
            this.toast('Le nombre de caractère du titre doit etre compris entre 3 et 100')
            return
        }
        if(price < 1 || price > 1000000){
            this.toast('Le prix doit être compris entre 1 € et 1 000 000 €')
            return
        }
        if(content.length > 1200){
            this.toast('La description ne doit pas dépasser 1200 caractères')
            return
        }
        let advert = new Advert(title,content,author,email,category,price,tabpictures)
        console.log(advert)
        try{
            if (await this.modelAdvert.insert(advert) === 201)
            {
                this.toast("Annonce Validée")
            }
        }
        catch (err)
        {
            console.log(err)
            this.displayServiceError()
        }
    }
    async displayCategories() {
        try {
            let content = '<option value="" disabled selected>Choisissez la catégorie</option>'
            for(const category of await this.modelCategory.getAllCategories()) {
                content += `<option value="${category.id}">${category.name}</option>`
            }
            console.log(content)
            this.selectcategory.innerHTML = content
            M.FormSelect.init(this.selectcategory)
        }
        catch (err) {
            console.log(err.message)
        }
    }
}
window.addAdvert = new AddAdvert()