class Movie {
    constructor (title, actor = "Not specified") {
        this.title = title
        this.actor = actor
    }
    async add (collection) {
        await collection.insertOne(this)
        return "Success"
        //add this to the database
    }

    async list (collection) {
        return await collection.find().toArray()
        // list all movies in the db
    }

    async update (collection) {
        return await collection.updateOne()
        // update a movie in the db
    }

    async delete (collection) {
        return await collection.deleteOne()
        // deleate a moive in the db
    }
}

module.exports = Movie