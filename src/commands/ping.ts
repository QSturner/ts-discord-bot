import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInt } from '../interfaces/CommandInt';

export const ping: CommandInt = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    run: async (interaction) => {
        await interaction.reply('Pong! 🏓');
    },
};