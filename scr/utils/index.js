const filter={title:"SpiderMan"}
const updateDoc={
    $set:{
        title:"Spider-Man: Homecoming"
    }
}
const query={title:"Superman"}

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
        await collection.updateOne(filter, updateDoc)
        return "Entry Updated"
        // update a movie in the db
    }

    async delete (collection) {
        await collection.deleteOne(query)
        return "Entry deleted"
        // deleate a moive in the db
    }
}

module.exports = Movie