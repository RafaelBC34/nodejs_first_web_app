import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    // res.send("<h1>Hello world!</h1>")
    res.render('index', {title: "First Website with NodeJs"})
})

router.get('/about', (req, res) => {
    // res.send("<h1>Hello world!</h1>")
    res.render('about', {title: "About me"})
})

router.get('/contact', (req, res) => {
    // res.send("<h1>Hello world!</h1>")
    res.render('contact', {title: "Contact me"})
})

export default router