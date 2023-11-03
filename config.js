const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("923466319114,")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'bhasithaj@gmail.com'
global.blockJids = process.env.BLOCK_JID ||'120363165030810524@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363165030810524@g.us' ;
global.github = 'https://github.com/JithulaBhasitha/Dark-Nero-Bot-'
global.location = 'Sri Lanka'
global.gurl = 'https://github.com/JithulaBhasitha' // add your username
global.sudo = process.env.SUDO || '94774071805'
global.devs = '94774071805';
global.website = 'https://github.com/JithulaBhasitha'
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.ibb.co/mCs8p89/cover.png'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'The-X 💗' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Little Hacker' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'Dark-Nero;;;GenesWhack' : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? '💗🎵The-X:Little Hacker' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? 'true' : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'The-X-MD' : process.env.PACK_INFO.split(";")[1],	
  dl_limit: process.env.DL_SIZE || '350',
  autoreaction:  process.env.AUTO_REACTION  === undefined ? 'true' : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? 'true' : process.env.ALWAYS_ONLINE,
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antibadword : process.env.ANTI_BAD_WORD || 'fuck,xxx,sex,xnxx,Brazzers,pronhub,huth,fucking,huththa,huththo,hukanna,fucked,pakaya,pako,ponnaya,ponnayo,kariya,kariyo,huththaa,huththa,wesa balla,huththige putha,kari balla',
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? 'true' : process.env.READ_MESSAGE,
  HANDLERS:  process.env.PREFIX === undefined ? ['#','!','.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? '3' : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? 'false' : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main',
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'හෙහෙ මම තාම වැඩ' : process.env.ALIVE_MESSAGE,
  caption :process.env.CAPTION || "  \t🎋⃟🥷 *ᴄʀᴇᴀᴛᴇᴅ ʙʏ The X",
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? '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' : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'Dark-Nero',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
