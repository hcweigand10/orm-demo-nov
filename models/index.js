const Superpower = require("./Superpower.js")
const User = require("./User")

// belongstomany...
User.belongsToMany(Superpower, {
    through: "Junction"
})

Superpower.belongsToMany(User, {
    through: "Junction"
})

module.exports={User,Superpower}