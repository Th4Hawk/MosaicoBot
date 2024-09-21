import { Collection } from "discord.js";

export function RandomWord(): string {
    return Math.random().toString(36).substring(2,8);
}

export const members: Collection<string, string> = new Collection();