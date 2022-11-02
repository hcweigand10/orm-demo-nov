const {User, Superpower} = require('../models')


const superpowers = [
    {
        name: "invicibility",
        description: "cannot be killed",
        downside: "still feel pain"
    },
    {
        name: "time control",
        description: "manipulate time",
        downside: "age while paused"
    },
    {
        name: "flight",
        description: "can fly",
        downside: "only 1 foot off the ground"
    }
]

const seed = async () => {
    const response = await Superpower.bulkCreate(superpowers)
    console.log(response)
    console.log("+++++++++++++++++++++")
    console.log("seeds planted")
}

seed()