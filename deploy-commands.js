/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
const __esModule = true;
/* eslint-disable no-undef */
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const { token, clientID, guildID } = require('./config.json');
const commands = [
    new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
    new SlashCommandBuilder().setName('server').setDescription('Replies with server info'),
    new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
]
    .map(function(command) { return command.toJSON(); });
const rest = new REST({ version: '9' }).setToken(token);
rest.put(Routes.applicationGuildCommands(clientID, guildID), { body: commands })
    .then(function() { return console.log('Sucessfully registered application commands.'); })['catch'](console.error);
