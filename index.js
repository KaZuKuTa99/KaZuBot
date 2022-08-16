const Discord = require("discord.js")
const genImage = require("./genImage")
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

const welcomeChannelId = "722937192208400495"
client.on("guildMemberAdd", async (member) => {
	const image = await genImage(member)
	member.guild.channels.cache.get(welcomeChannelId).send({
		content: `Oh, you finally made it to the mixer <@${member.id}>!`,
		files: [image]
    })
})

client.login(process.env.TOKEN)