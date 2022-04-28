# Discord-v13-Commands-handlers

- Fill the `Config.json file`.
- ```js
    "token": "",
    "prefix": "b#",
    "color": {
        "main": "BLACK",
        "error": "RED"
    },
    "owner": [
        "your user id",
        "other developer user id"
    ]
    ```

---

# Also if your use replit
- Go to `.replit` file and change to:
- `language = "nodejs"`
- `run = "node index.js"`
---
# This Commands Handler Need node version v16+
- To update it got to shell in replit console box
```
npm init -y && npm i --save-dev node@16 && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH
```
---
- Also Change `client.login(token)` to `client.login(process.env.token);`
- Open `secrets`
- [![example](https://cdn.discordapp.com/attachments/853617109560328192/922205086665572402/unknown.jpg)](https://cdn.discordapp.com/attachments/853617109560328192/922205086665572402/unknown.jpg)
- Put `your bot token` inside the `value box`
- And then press `save`
- Lastly press `run` buttons to start the bot.
