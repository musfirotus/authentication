const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

const routeIndex = require('./src/routes/index')
const routeAuthor = require('./src/routes/authors')
const routePost = require('./src/routes/posts')
const routeComment = require('./src/routes/comments')

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(bodyParser.json())

app.use('/', routeIndex)
app.use('/author', routeAuthor)
app.use('/post', routePost)
app.use('/comment', routeComment)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})