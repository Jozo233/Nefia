const { Client } = require("discord.js")
const ms = require("ms")
const db = require("mongoose")
const dbURL = process.env.DBURL
module.exports = {
    name: "ready",

    /**
    * @param {Client} client
    */
    async execute(client) {

        const { user, ws } = client

        console.log(`[DISCORD] Connected`)

        setInterval(() => {

            const ping = ws.ping

            user.setActivity({
                name: `Ping: ${ping} ms`,
                type: 3,
            })

        }, ms("5s"))

        if (!dbURL) return

        db.connect(dbURL, {

            useNewUrlParser: true,
            useUnifiedTopology: true

        }).then(() => {

            console.log("[DATABASE] Connected")
        }).catch(err => console.log(err))

    }
}