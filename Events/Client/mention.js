const { Client, Message, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require("discord.js")
const ms = require("ms")

module.exports = {
    name: "messageCreate",

    /**
    * @param {Message} message
    * @param {Client} client
    */

    async execute(message, client) {

        const { author, guild, content} = message
        const { user } = client

        if (!guild || author.bot) return
        if (content.includes("@here") || content.includes("@everyone")) return
        if (content.includes(user.id)) return

        return message.reply({

            embeds: [
                new EmbedBuilder()
                    .setColor(client.color)
                    //.setAuthor({ name: user.username, iconURL:user.displayAvatarURL{} })
                    .setDescription(`Hey this is Nefia`)
                    .setThumbnail(user.displayAvatarURL())
                    .setFooter({ text: "Develop by Jozo_85" })
                    .setTimestamp()
            ],

            components: [

                new ActionRowBuilder().addComponents(

                    new ButtonBuilder()
                        .setStyle(ButtonStyle.Link)
                        .setURL("invite.nefia.jozo85.ml")
                        .setLabel("Invite me"),

                    new ButtonBuilder()
                        .setStyle(ButtonStyle.Link)
                        .setURL("invite.nefia.jozo85.ml")
                        .setLabel("Dashboard"),    
                )


            ]
        }).then(msg => {

            setTimeout(() => {

                msg.delete().catch(err => {

                    if (err.code != 100) return console.log(err)
                })
            }, ms("10s"))

        })

    }


}