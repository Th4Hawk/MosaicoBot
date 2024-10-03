import { Responder, ResponderType } from "#base";
import { members } from "#functions";

new Responder({
    customId: "verify/code/modal",
    type: ResponderType.Modal, cache: "cached",
    async run(interaction) {
        const {member, guild, fields} = interaction;

        const code = members.get(member.id);
        const InputCode = fields.getTextInputValue('verify/code/input');

        if (!code || code !== InputCode) {
            interaction.reply({ephemeral: true, content: "Codigo invalido ou expirado"});
            return;
        }
        const role: any = guild.roles.cache.get("1290764900930555994");
        members.delete(member.id);

        await member.roles.add(role);

        interaction.reply({ephemeral: true, content: "Você foi verificado com sucesso. Aproveite o servidor!"})
    },
});