class Category {
    constructor(name) {
        this.name = name
    }
}

class Advert {
    constructor(title, content, author, email, category, price, pictures) {
        this.title = title
        this.content = content
        this.author = author
        this.email = email
        this.category = category
        this.price = price
        this.pictures = pictures
    }
}

class Picture {

    constructor(path, createdAt, advert) {
        this.path = path
        this.createdAt = createdAt
        this.advert = advert
    }

}