const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['254792936892']
global.ownername = "MR. PEYWA"//owner name
global.ytname = "YT: ℂ𝕆𝔻𝔼_𝕀𝕋 𝔹𝕆𝕋 Botz.inc"
global.socialm = "GitHub: Peywa"
global.location = "Kenya"

global.botname = 'ℂ𝕆𝔻𝔼_𝕀𝕋 𝔹𝕆𝕋' //name of the bot

//sticker details
global.stickername = 'ℂ𝕆𝔻𝔼_𝕀𝕋 𝔹𝕆𝕋'
global.packname = 'Sticker By'
global.author = 'MR.PEYWA'
//console view/theme
global.themeemoji = '𓅃'
global.wm = "MR. PEYWA."

//theme link
//global.link = 'https://chat.whatsapp.com/Cw6bgtSB0Wm7wDEP1e9WPw'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.welcome = false //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = true //auto view status/story



//reply messages
global.mess = {
    done: '*here you go!* \n\n*🎀 ℂ𝕆𝔻𝔼_𝕀𝕋 𝔹𝕆𝕋 🎀*\n\n*🧩 Bot link:* \nhttps://github.com/Brashokish/Kish-MD\n',
    prem: '*This feature can be used by premium user only*',
    admin: '*This feature can be used by admin only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by owner only*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*In process...* ',    
    error: '*Error!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
