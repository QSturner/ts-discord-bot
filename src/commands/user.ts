import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInt } from '../interfaces/CommandInt';

export const user: CommandInt = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Replies with server info!'),
    run: async (interaction) => {
        await interaction.reply(`Your ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
    },
};