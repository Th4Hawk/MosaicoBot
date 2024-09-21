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
        .setImage("https://images-ext-1.discordapp.net/external/3kPAFHcrE-prN4GH-g-YOkr29wu4EgAJYvtJst7T4DY/%3Fsize%3D2048/https/cdn.discordapp.com/banners/1281421933413404703/93c1c50ac1cfa18045b1bafb54b755f0.png?format=webp&quality=lossless&width=400&height=225")
        
        const canal: any = member.guild.channels.cache.get("1284674978368983111");
        
        await canal.send({ embeds: [embed] });
        
    },
})