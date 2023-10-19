import db from './connectDB.js'

const coll = db.collection ('coffees')

export function addCoffee (req, res) {
    const newCoffee = req.body 
    coll.add(newCoffee)
    .then(() => res.status(201).send({message: "success" })
    .catch(err => res.status(500)).send([ message: err.message]))
}
export function getAllCoffee(req, res) {
    coll.get()
        .then(collection => {
            res.send (coffee)

        })
        .catch(err => res.status(500).send({message: err.message
        }))
    }