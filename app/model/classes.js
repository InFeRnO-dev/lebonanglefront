class Category {
    constructor(name) {
        this.name = name
    }
}

class Advert {
    constructor(title, content, author, email, category, price, state, createdAt, publishedAt, pictures) {
        this.title = title
        this.content = content
        this.author = author
        this.email = email
        this.category = category
        this.price = price
        this.state = state
        this.createdAt = createdAt
        this.publishedAt = publishedAt
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