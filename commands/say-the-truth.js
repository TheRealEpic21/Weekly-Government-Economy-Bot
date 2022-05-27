const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('say-the-truth')
		.setDescription('Replies with the truth.'),
	async execute(interaction) {
		await interaction.reply(`<@${interaction.user.id}> is a fucking idiot.`);
	},
};
