const express = require('express')
const members = require('../../Members')
const uuid = require('uuid')
const { json } = require('express')
const router = express.Router()
router.get('/:id' , (req , res)=>{
    const found = members.some(member => member.id === parseInt(req.params.id) )
    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)))

    }else{
        res.status(400).json({msg: 'Member not found'})
    }
})

router.get('/' , (req , res)=>{
    res.json(members)
})

// create new member
router.post('/' , (req , res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }
    if(!newMember.name || !newMember.email){
       return res.status(400).json({msg: 'please incluse name and email'}) 
    }

    members.push(newMember)
    res.json(members)
})

module.exports = router