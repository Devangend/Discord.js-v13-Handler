module.exports = {
    name: "ping",
    description: "return bot ping",
    usage: "<prefix>eval <code>",
    aliases: ["ping"],
    permissions: [],
    cooldown: 3000,
    run: async (client, message, args) => {
        return message.channel.send({
            content: `Ping: ${client.ws.ping} ms`
        })
    }
}