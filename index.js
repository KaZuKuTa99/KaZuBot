const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTMwMjQ1NTMwNjM2OTIyOTQw.YdzEqQ.ILba7rWKPZdVrSWaToBjVKpg5sc"

const client = new Discord.Client({
	intents: [
		"GUILDS",
		"GUILD_MESSAGES",
		"GUILD_MEMBERS"
 	]
})

client.on("ready", () => {
	console.log('Logged in as ${client.user.tag}')
})

client.on("messageCreate", (message) => {
	if (message.content == "hi kouko" || message.content == "hello kouko") {
		message.reply(`Hello User-chan`)
	}
})

const welcomeChannelId = "930605509885694062"
client.on("guildMemberAdd", (member) => {
	member.guild.channels.cache.get(welcomeChannelId).send(`Oh, you decided to actually come here <@${member.id}>?`)
})
client.login(process.env.TOKEN)