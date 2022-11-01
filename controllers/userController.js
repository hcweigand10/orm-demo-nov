const express = require("express");
const { findAll } = require("../models/User");
const router = express.Router();
const User = require("../models/User");

// GET route
router.get("/", (req, res)=>{
    User.findAll()
    .then((allUsers)=>{
        res.json(allUsers);
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({error: err})
    })
})

// POST route
router.post("/", (req, res)=> {
    console.log(req.body)
    User.create(req.body)
    .then((data)=>{
        res.json(data)
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json({ error: err})
    })
})


module.exports = router;