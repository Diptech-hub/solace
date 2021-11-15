import { Client, Intents } from 'discord.js';

export const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
 
bot.on('messageCreate', (message) => {console.log('${bot.user.username} is online')});
bot.on('message', async (msg) => {
    if(msg.author.bot) return;

    await msg.reply('Hi');
});

bot.login('OTA5NDM5OTQwMDk2NTg5ODQ0.YZET8g.XEGgX6NZXTO2GUf-gggTlGffims');























// import { Client, Intents } from 'discord.js';

// export const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
 
// bot.on('messageCreate', () => {console.log('${bot.user.username} is online')});
// bot.on('message', async (msg) => {
//     if(msg.author.bot) return;

//     await msg.reply('Hi');
// });

// Client.login( 'OTA5NDM5OTQwMDk2NTg5ODQ0.YZET8g.XEGgX6NZXTO2GUf-gggTlGffims' );



// const bot = new Client();

// bot.on('ready', () => console.log('ready'));

// bot.login('OTA5NDM5OTQwMDk2NTg5ODQ0.YZET8g.Ysq2AMnH3kOQBQKOMmzrIwNOvwk');
