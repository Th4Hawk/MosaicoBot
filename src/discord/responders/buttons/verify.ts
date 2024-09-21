import { Responder, ResponderType } from "#base";
import { createModalInput } from "@magicyan/discord";
import { TextInputStyle } from "discord.js";
import { members } from "#functions";

new Responder({
    customId: "verify/code/button",
    type: ResponderType.Button,
    cache: 'cached',
    async run(interaction) {
        const { member, guild } = interaction;

        const role = guild.roles.cache.get("1284974452450398218");
        if (!role) {
            interaction.update({content: "Cargo não configurado.", embeds: [], components: []});
            return;
        }

        if (member.roles.cache.has(role.id)) {
            interaction.update({content: "Você já esta verificado", embeds: [], components: []});
            return;
        }

        if (!members.has(member.id)) {
            interaction.update({content: "Por favor, utilize o comando /verificar novamente."});
            return;
        }

        interaction.showModal({
            customId: "verify/code/modal",
            title: "Verificação",
            components: [ createModalInput({
                customId: "verify/code/input",
                label: "Codigo de verificação",
                placeholder: "Insira o codigo de verificação",
                style: TextInputStyle.Short,
                required: true,
            })]
        })
    },
});