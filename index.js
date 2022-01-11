const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTMwMjQ1NTMwNjM2OTIyOTQw.YdzEqQ.ILba7rWKPZdVrSWaToBjVKpg5sc"

const client = new Discord.Client({
	intents: [
		"GUILDS",
		"GUILD_MESSAGES"
 	]
})

client.on("ready", () => {
	console.log('Logged in as ${client.user.tag}')
})

client.on("messageCreate", (message) => {
	if (message.content == "hi") {
		message.reply("Hello numbnuts! >:)")
	}
})

client.login(process.env.TOKEN)