const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	}
	else if (commandName === 'beep') {
		await interaction.reply('Boop!');
	}
	else if (commandName === 'say-the-truth') {
		await interaction.reply(`<@${interaction.user.id}> is a fucking idiot.`);
	}
});

client.login(token);
