const app = require('express')()

app.get('/', (request, response) => {
    response.json({ message: 'hello' })
})


app.listen(8080, () => {
    console.log('Started')
})