const { Client, GatewayIntentBits, Partials } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Message],
});

client.once('ready', () => {
  console.log(`Anti-Feur bot connecté sur ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase().includes('feur')) {
    message.reply('On ne dit pas **"feur"** ! C\'est méchant ! ❌');
  }
});

client.login('token'); // met ton token ici