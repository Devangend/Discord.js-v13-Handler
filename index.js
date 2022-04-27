  //Main Module
  const Discord = require('discord.js');
  const client = new Discord.Client({ 
      intents: [ //32509 <---- all intents 
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_BANS,
        Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
        Discord.Intents.FLAGS.GUILD_WEBHOOKS,
        Discord.Intents.FLAGS.GUILD_INVITES,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS ,
        Discord.Intents.FLAGS.DIRECT_MESSAGE_TYPING,
        Discord.Intents.FLAGS.GUILD_SCHEDULED_EVENTS,
        Discord.Intents.FLAGS.GUILD_SCHEDULED_EVENTS,
        ],
      presence: {
          status: "dnd",
          activities: [{
              name: "Discord v13 Cmd handler",
              type: "WATCHING",
          }],
      }
  });
  //Variables
  const config = require('./config.json');
  //Handlers 
  client.commands = new Discord.Collection();
  client.aliases = new Discord.Collection();
  client.cooldown = new Discord.Collection();
  
  require("dotenv").config();
  require("./Handlers/Commands.js")(client);
  require("./Handlers/Events.js")(client);
  
  client.chalk = require('chalk');
  
  //Show If The Project Are Online!
  client.on('ready', () => {
  console.log(`Aplication Are Online! 
  Name: ${client.user.tag} 
  Server: ${client.guilds.cache.size}
  Members: ${client.guilds.cache.map((g) => g.memberCount || 0).reduce((x, y) => x + y, 0)}
  Engine: Nodejs ${process.version}`)
  });
  
   // Login to the bot
  client.login(config.token)
