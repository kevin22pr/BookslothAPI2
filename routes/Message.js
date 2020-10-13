const express = require("express")
const router = express.Router()
const models = require("../models")

router.get('/', async (req, res) => {
    try {
        let query = {
            include: [{
                model: models.UserMessage,
                required: true,
                include: {
                    model: models.User,
                    required: true
                }
            }, {
                model: models.Reply,
                required: false,
                include: [{
                    model: models.UserReply,
                    required: true,
                    include: {
                        model: models.User,
                        required: true
                    }
                }, {
                    model: models.ReplyLike,
                    required: false
                }]
            }, {
                model: models.MessageLike,
                required: false
            }]
        }

        let allMessages = []
        const messages = await models.Message.findAll(query)

        messages.map(item => {
            let message = {
                message: item.message,
                full_name: item.UserMessage.User.full_name,
                photo: item.UserMessage.User.avatar,
                replies: [],
                likes: item.MessageLikes
            }

            item.Replies.map(item => {
                let reply = {
                    message: item.message,
                    full_name: item.UserReply.User.full_name,
                    avatar: item.UserReply.User.avatar,
                    likes: item.ReplyLikes
                }

                message.replies.push(reply)
            })

            allMessages.push(message)
        })

        res.send(allMessages)

    } catch (error) {
        res.send({ message: error.message })
    }
})

router.post('/send', async (req, res) => {
    try {
        const { user_id, message } = req.body

        const newMessage = await models.Message.create({ message })
        await newMessage.save()

        const newUserMessage = models.UserMessage.create({ user_id, message_id: newMessage.id })
        await newUserMessage.save()

        res.send({
            message: "Message has been posted!",
            userMessage: newUserMessage,
            post: newMessage
        })

    } catch (error) {
        res.send({ message: error.message })
    }
})

router.post('/reply', async (req, res) => {
    try {
        const { user_id, message_id, message } = req.body

        const newReply = await models.Reply.create({ message_id, message })
        await newReply.save()

        const newUserReply = await models.UserReply.create({ user_id, reply_id: newReply.id })
        await newUserReply.save()

        res.send({
            message: "Reply has been posted!",
            userReply: newUserReply,
            reply: newReply
        })
    } catch (error) {
        res.send({ message: error.message })
    }
})

router.post('/message/like', async (req, res) => {
    try {
        const { user_id, message_id } = req.body

        const newLike = await models.MessageLike.create({ user_id, message_id })
        await newLike.save()

        res.send({
            message: "Message liked"
        })
    } catch (error) {
        res.send({ message: error.message })
    }
})

router.post('/reply/like', async (req, res) => {
    try {
        const { user_id, reply_id } = req.body

        const newLike = await models.ReplyLike.create({ user_id, reply_id })
        await newLike.save()

        res.send({
            message: "Reply liked"
        })
    } catch (error) {
        res.send({ message: error.message })
    }
})

module.exports = router