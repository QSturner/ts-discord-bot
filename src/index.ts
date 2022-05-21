import { Client } from 'discord.js';
import { IntentOptions } from './config/IntentOptions';
import { onInteraction } from './events/onInteraction';
import { onReady } from './events/ready';
import { validateEnv } from './utils/validateEnv';

(async () => {
	console.log('Bot is starting up...');

	validateEnv();

	const client = new Client({
		intents: [IntentOptions],
	});

	client.on('ready', async () => await onReady(client));

	client.on('interactionCreate', async (interaction) => {
		await onInteraction(interaction);
	});

	await client.login(process.env.TOKEN as string);
});

