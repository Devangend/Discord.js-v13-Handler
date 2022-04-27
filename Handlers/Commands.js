const { readdirSync } = require("fs");

module.exports = (client) => {
  
  let directory = readdirSync('./Commands');
  console.log(`Total Commands Category: ${directory.length}`);
  
  for(let category of directory) {
    let files = readdirSync(`./Commands/${category}`);
    console.log(`Total Commands in Category [${category}]: ${files.length}`);
    
    for(let file of files) {
      let inside_file = require(`../Commands/${category}/${file}`);
      
      client.commands.set(file.split(".")[0], inside_file);
      inside_file.aliases.forEach((alias) => {
        client.aliases.set(alias, inside_file);
      })
    }
  }
}