const { Client } = require("discord.js")
const SoftUI = require("dbd-soft-ui")
const DBD = require("discord-dashboard")

module.exports = {
    name: "ready"

    /**
     * @param {Client} clinet
     */

    (async ()=>{
        await DBD.useLicense(process.env.DBD);
        DBD.Dashboard = DBD.UpdatedClass();
    
        const Dashboard = new DBD.Dashboard({
            port: 800,
            client: config.discord.client,
            redirectUri: `${config.dbd.domain}${config.dbd.redirectUri}`,
            domain: config.dbd.domain,
            ownerIDs: config.dbd.ownerIDs,
            useThemeMaintenance: true,
            useTheme404: true,
            bot: client,
            theme: SoftUI({
                customThemeOptions: {
                    index: async ({ req, res, config }) => {
                        return {
                            values: [],
                            graph: {}, // More info at https://dbd-docs.assistantscenter.com/soft-ui/docs/customThemeOptions/
                            cards: [],
                        }
                    },
                },
                websiteName: "Assistants",
                colorScheme: "pink",
                supporteMail: "support@support.com",
                icons: {
                    favicon: "https://assistantscenter.com/wp-content/uploads/2021/11/cropped-cropped-logov6.png",
                    noGuildIcon: "https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-Circle-1024x1024.png",
                    sidebar: {
                        darkUrl: "https://assistantscenter.com/api/user/avatar/63ad65e2d3f1b1b3acdff794",
                        lightUrl: "https://assistantscenter.com/api/user/avatar/63ad65e2d3f1b1b3acdff794",
                        hideName: true,
                        borderRadius: false,
                        alignCenter: true,
                    },
                },
                preloader: {
                    image: "/img/soft-ui.webp",
                    spinner: false,
                    text: "Page is loading",
                },
                index: {
                    graph: {
                        enabled: true,
                        lineGraph: false,
                        tag: 'Memory (MB)',
                        max: 100
                    },
                },
                sweetalert: {
                    errors: {},
                    success: {
                        login: "Successfully logged in.",
                    }
                },
                preloader: {
                    image: "/img/soft-ui.webp",
                    spinner: false,
                    text: "Page is loading",
                },
                admin: {
                    pterodactyl: {
                        enabled: false,
                        apiKey: "apiKey",
                        panelLink: "https://panel.website.com",
                        serverUUIDs: []
                    }
                },
                commands: [],
            }),
            settings: []
        });
        Dashboard.init();
    })()
}