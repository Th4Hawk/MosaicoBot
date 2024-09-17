import { Command } from "#base";
import { ApplicationCommandType } from "discord.js";

new Command({
    name: "oi",
    description: "Faz o bot dizer oi",
    type: ApplicationCommandType.ChatInput,

    async run(interaction) {
        interaction.reply({ephemeral: true, content: "Oi, o chiota é gay"})
    },
}); 