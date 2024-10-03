import { Command } from "#base";
import { ApplicationCommandType, ButtonBuilder, ButtonStyle, EmbedBuilder, italic, time } from "discord.js";
import { RandomWord } from "#functions";
import { createRow } from "@magicyan/discord";
import { members } from "#functions";


new Command({
    name: "verificar",
    description: "Realiza a verificação do usuario",
    dmPermission: false,
    type: ApplicationCommandType.ChatInput,

    async run(interaction) {
        if (!interaction.inCachedGuild()) return;

        const { member, guild } = interaction;

        const role = guild.roles.cache.get("1290764900930555994");
        if (!role) {
            interaction.reply({ephemeral: true, content: "Cargo não configurado."});
            return;
        }

        if (member.roles.cache.has(role.id)) {
            interaction.reply({ephemeral: true, content: "Você já esta verificado"});
            return;
        }

        const code = RandomWord();
        const timestamp = new Date(Date.now() + 30000)

        const embed = new EmbedBuilder()
        .setTitle("Verificação")
        .setDescription(`Digite o seguinte codigo para ser verificado: ||${code}||\n ${italic(`Expira em: ${time(timestamp, 'R')}`)}`)
    
        const row = createRow(
			new ButtonBuilder({ 
				customId: "verify/code/button",
				label: "Verificar",
				style: ButtonStyle.Success
			})
		);

        await interaction.reply({ephemeral: true, embeds: [embed], components: [row]});

        members.set(member.id, code);
        setTimeout(() => members.delete(member.id), 30_000);
    },
});

