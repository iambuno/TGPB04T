const Discord = require("discord.js");
const mongoose = require("mongoose");
const schemas = require("../schemas.js");
const items = require("../items.json");
const shortcuts = require("../utils/shortcuts.js")
module.exports.run = async (client, message, args) => {
    let user = await schemas.userPoints.findOne({userID: message.author.id});
}
