const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('ALL SHELTERS')
})
router.post('/',(req,res)=>{
    res.send('CREATING A NEW SHELTERS')
})
router.get('/:id',(req,res)=>{
    res.send('viewing SHELTERS')
})
router.get('/:id/edit',(req,res)=>{
    res.send('EDITING ONE SHELTERS')
})

module.exports = router;