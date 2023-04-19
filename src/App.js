require('dotenv').config();//envファイルの読み込み
const Bot = require('discord.js');
//.envからtokenの呼び出し
const {BOT_TOKEN} = process.env;

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
	intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages
    ]
});
const token = BOT_TOKEN;


//起動確認
client.once('ready', () => {
    console.log(`${client.user.tag} Ready`);
});

client.on('messageCreate', message => {
    if (message.author.bot) {
        return;
    }else{
        // message.channel.send(message.content + ` by ${message.author.tag}`);
        // console.log(message.author.tag);
        if(message.content == "hi"){
            message.channel.send("Hi" + ` ${message.author.tag}`)
        }
    }
});

process.on('uncaughtException', (err) => {
    console.log(`${err.stack}`);
});

client.login(token);