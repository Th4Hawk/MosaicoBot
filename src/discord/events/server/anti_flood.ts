import { Event } from "#base";
import { Collection, EmbedBuilder } from "discord.js";

const members: Collection<string, number> = new Collection();

new Event({
    name: "Anti Flood System",
    event: "messageCreate",
    async run(message) {
        if (!message.inGuild) return;
        if (message.author.bot) return;
        if (message.author.id == message.guild?.ownerId) return;

        const {author, channel, member} = message;

        const count = members.get(author.id);
        if (!count) {
            members.set(author.id, 1)
            return;
        };

        const newCount = count + 1;
        members.set(author.id, newCount);

        if (newCount >= 5) {
            members.delete(author.id);

            member?.timeout(60_000, "Flood");

            const embed = new EmbedBuilder()
            .setDescription(`Incrível como a evolução falhou em evitar seu flood. Nem um primata faria isso. Que isso não se repita ${author}`)
            .setColor("Red");

            const message = await channel.send({embeds: [embed]})
            setTimeout(() => message.delete().catch(() => {}), 60_000);
            return;
        }

        setTimeout(() => {
            const currCount = members.get(author.id);
            if (!currCount) return;
            members.set(author.id, currCount - 1);
        }, 6000)
    },
});

