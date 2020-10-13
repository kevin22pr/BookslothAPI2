const express = require("express")
const router = express.Router()
const models = require("../models")

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await models.User.findAll()
        res.send(users)
    } catch(error) {
        console.error(error.message, error.stack)
    }
})

//Get a single User
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const aUser = await models.User.findOne({ where: {id: id}})
        res.json(aUser)
    } catch (err) {
        console.error(err.message)
    }
})

router.post('/create', async (req, res) => {
    try {
        const { full_name, avatar } = req.body
        const newUser = await models.User.create({ full_name, avatar })
        newUser.save()
        res.send({ message: "User has been created", user: newUser })
    } catch( error ) {
        console.error(error.message, error.stack)
    }
})

//Update a User
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { provider_full_name, specialty } = req.body
        const user = await models.user.findOne({where: {id: id}})
        user.provider_full_name = provider_full_name
        user.specialty = specialty
        await user.save()
        res.json({message: "User was updated", user})
    } catch (err) {
        console.error(err.message)
    }
})

//Delete a User
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const user = await models.User.findOne({where: {id: id}})
        await user.destroy()
        res.json({message: "User was deleted!", user})
    } catch (err) {
        console.error(err.message)
    }
})

module.exports = router