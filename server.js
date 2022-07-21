const express = require('express')
const logger = require('./middleware/logger')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000

// app.use(logger)
// get single user

app.get('/' , (req , res)=>{
    res.sendFile(path.join(__dirname , 'public' , 'index.html'))

})

app.use('/api/members', require('./routes/api/member'))
// body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname , 'public')))
app.listen(PORT , ()=> console.log(`server started on ${PORT}`))