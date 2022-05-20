import { Client, Intents } from 'discord.js';
import { token } from '../config.json';
import ready from './listeners/ready';

console.log('Bot is starting. . .');

const client = new Client({
    intents: [Intents.FLAGS.GUILDS],
});

ready(client);

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
		await interaction.reply('Pong!');
	}
    else if (commandName === 'server') {
		// eslint-disable-next-line quotes
		await interaction.reply(`Server name: ${interaction.guild?.name}\nTotal members: ${interaction.guild?.memberCount}\nServer Creation Date: ${interaction.guild?.createdAt}`);
	}
    else if (commandName === 'user') {
		await interaction.reply('User info.');
	}
});

client.login(token);

