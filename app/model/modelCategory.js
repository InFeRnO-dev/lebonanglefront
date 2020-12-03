class ModelCategory {
    constructor() {
        this.apicategory = new Categoryapi ()
    }
    async getAllCategories() {
        let categories = []
        for (let category of await this.apicategory.getAllCategories()) {
            categories.push(Object.assign(new Category(), category))
        }
        return categories
    }

    /*
    async getListById(id) {
        try {
            const list = Object.assign(new List(), await this.apilist.getListById(id))
            list.date = new Date(list.date)
            return list
        } catch (e) {
            if (e === 404) return null
            console.log(e)
            return undefined
        }
    }
    */
}