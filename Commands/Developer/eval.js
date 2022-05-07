const { Formatters, MessageEmbed } = require("discord.js");
const Beautify = require('beautify');
const { owner, color } = require("../../config.json");

module.exports = {
    name: "eval",
    description: "Developer Commands Only",
    usage: "<prefix>eval <code>",
    aliases: ["evals"],
    permissions: [],
    cooldown: 3000,
    run: async (client, message, args) => {
        if (owner.includes(message.author.id)) {

          //---------------------------------------------
          if (!args[0]) {
            return message.channel.send("You need to evaluate **SOMETHING** Please!")
          }
          //---------------------------------------------

          try {
            if (args.join(" ").toLowerCase().includes("token")) {
              return;
            }

            const toEval = args.join(" ");
            const evaluated = eval(toEval);
            
            let embed = new MessageEmbed()
            .setTitle("Discord.js Eval")
            .addField("**Input**", Formatters.codeBlock("js", Beautify(args.join(" "), { format: "js" })))
            .addField("**Output**", Formatters.codeBlock("js", evaluated))
            .setTimestamp()
            .setFooter({
                text: `Type: ${typeof(evaluated)}`
            })
            .setColor(color.main)
            message.channel.send({
                embeds: [embed]
            });
            
          } catch (e) {
            // Return error when your eval the code
            let errorembed = new MessageEmbed()
            .setTitle("ERROR!")
            .setDescription(Formatters.codeBlock("js", e))
            .setTimestamp()
            .setColor(color.error)
            message.channel.send({
                embeds: [errorembed]
            });
          }
        } else {
            return;
        }
    }
}
