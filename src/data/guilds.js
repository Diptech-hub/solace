import { SavedGuild } from "./models/guild.js";

export class Guilds {
    async get(id) {
        return await SavedGuild.findmyId(id)
            ?? await SavedGuild.create({_id:  id });
    }
}