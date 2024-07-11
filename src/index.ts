import {PrismaClient} from '@prisma/client'
import * as bodyParser from 'body-parser'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(bodyParser.json())

//CREATE
app.post(`/user`, async (req, res) => {
    try {
        const result = await prisma.user.create({
            data: {
                ...req.body,
            },
        })
        res.json(result)
    } catch (e) {
        res.status(404).json({
            error: 'Error!',
        })
    }
})

//READ
app.get('/user', async (req, res) => {
    try {
        const users = await prisma.user.findMany()
        res.json(users)
    } catch (e) {
        res.status(404).json({
            error: 'Error!',
        })
    }
})

//UPDATE
app.put(`/user/:id`, async (req, res) => {
    try {
        const {id} = req.params
        const result = await prisma.user.update({
            where: {id: Number(id)},
            data: {
                ...req.body,
            }
        })
        res.json(result)
    } catch (e) {
        res.status(404).json({
            error: 'Error!',
        })
    }
})

//DELETE
app.delete(`/user/:id`, async (req, res) => {
    try {
        const {id} = req.params
        const post = await prisma.user.delete({
            where: {
                id: Number(id),
            },
        })
        res.json(post)
    } catch (e) {
        res.status(404).json({
            error: 'Error!',
        })
    }
})

const server = app.listen(3000, () =>
    console.log(
        '🚀 Server ready at: http://localhost:3000\n',
    ),
)
