const { readdirSync } = require('fs')

module.exports = (client) => {
    let events = readdirSync('./Events');
    console.log(`Total Events: ${events.length}`);

    for(let event of events) {
        let inside_event = require(`../Events/${event}`);
        client.on(event.split(".")[0], (...args) => inside_event(client, ...args));
    }
}