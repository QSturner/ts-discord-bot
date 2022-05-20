/* eslint-disable no-undef */
import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v10';
import { clientID, guildID, token } from './config.json';

const commands = [
    new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
    new SlashCommandBuilder().setName('server').setDescription('Replies with server info'),
    new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
]
    .map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientID, guildID), { body: commands })
    .then(() => console.log('Sucessfully registered application commands.'))
    .catch(console.error);