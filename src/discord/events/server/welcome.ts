import { Event } from "#base";
import { EmbedBuilder } from "discord.js";

new Event({
    name: "Welcome Message",
    event: "guildMemberAdd",
    async run(member) {
        const embed = new EmbedBuilder()
        .setTitle(`Seja bem vindo ${member.user.displayName}!`)
        .setDescription("Esperamos que aproveite sua experiência no servidor!")
        .setAuthor({
            name: member.user.displayName,
            iconURL: member.user.avatarURL() || undefined
        })
        .setImage("https://media.discordapp.net/attachments/857654260124614726/1289732772289843282/e565208dd16118a9e56aba4a54dd3a67.webp?ex=66f9e4be&is=66f8933e&hm=4b6264fbcef3be652a78d67359c5fa19e1d86bd37d6e1d159c7a127f868f8945&=&animated=true&width=550&height=309")
        
        const canal: any = member.guild.channels.cache.get("1290764901735727254");
        
        await canal.send({ embeds: [embed] });
        
    },
})