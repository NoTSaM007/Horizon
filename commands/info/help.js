const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const { COLOR } = require("../../config.json");
const { PREFIX } = require("../../config.json");
const db = require("quick.db");

module.exports = {
  name: "help",
  description: "Aʟʟ Tʜᴇ Cᴏᴍᴍᴀᴍᴅs Aʀᴇ Dɪsᴘʟᴀʏᴇᴅ Hᴇʀᴇ.",
  aliases: ["h"],
  category: "Info",
  execute(client, message, args) {
    let info = [];
    let music = [];
    let utility = [];
    let fun = [];
    let action = [];
    let moderation = [];
    let image = [];
    let games = [];
    let prefix = db.fetch(`prefixes_${message.guild.id}`);
    if (!prefix) prefix = PREFIX;

    if (args[0]) {
      let command = args[0];
      if (client.commands.has(command)) {
        command =
          client.commands.get(command) ||
          client.commands.get(client.aliases.get(command));
        let embed = new MessageEmbed()
          .setAuthor(message.author.username, message.author.avatarURL())
          .setThumbnail(message.guild.iconURL())
          .setTitle("Help!")
          .addField(
            "Command Name",
            `${client.capitalize(command.name) || "No Name"}`,
            true
          )
          .addField(
            "Command Description",
            command.description || "No Description",
            true
          )
          .addField("Command Category", command.category || "No Category", true)
          .setColor("00ffff");
        message.channel.send(embed).catch(console.log);
      }
    } else {
      client.commands
        .filter(cmd => cmd.category === "Info")
        .forEach(cmd => info.push(cmd.name));
      client.commands
        .filter(cmd => cmd.category === "Action")
        .forEach(cmd => action.push(cmd.name));
      client.commands
        .filter(cmd => cmd.category === "Fun")
        .forEach(cmd => fun.push(cmd.name));
      client.commands
        .filter(cmd => cmd.category === "Games")
        .forEach(cmd => games.push(cmd.name));
      client.commands
        .filter(cmd => cmd.category === "Image")
        .forEach(cmd => image.push(cmd.name));
      client.commands
        .filter(cmd => cmd.category === "Moderation")
        .forEach(cmd => moderation.push(cmd.name));
      client.commands
        .filter(cmd => cmd.category === "Music")
        .forEach(cmd => music.push(cmd.name));
      client.commands
        .filter(cmd => cmd.category === "Utility")
        .forEach(cmd => utility.push(cmd.name));

      let embed = new MessageEmbed()
        .setAuthor(`❝Cᴏᴍᴍᴀɴᴅ Sᴇᴄᴛɪᴏɴ❞`, client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL())
        .setColor(COLOR)
        .setDescription(
          `${client.emojis.cache.get("759263441587666964")} **Cᴏᴍᴍᴀɴᴅ Lɪsᴛ Oғ ${
            client.user.username
          }. | Tᴏᴛᴀʟ Cᴏᴍᴍᴀɴᴅs:** ` + `**[${client.commands.size}]**`
        )
        .addField(
          `<:info:770703029183840266> **| Iɴғᴏ - [${
            client.commands.filter(cmd => cmd.category === "Info").size
          }]**`,
          "``" + prefix + info.join("``, " + "``" + prefix) + "``",
          true
        )
        .addField(
          `<:02Blush:754195456342491186> **| Aᴄᴛɪᴏɴ - [${
            client.commands.filter(cmd => cmd.category === "Action").size
          }]**`,
          "``" + prefix + action.join("``, " + "``" + prefix) + "``",
          true
        )
        .addField(
          `<a:PIKACHU:758042888000110644> **| Fᴜɴ - [${
            client.commands.filter(cmd => cmd.category === "Fun").size
          }]**`,
          "``" + prefix + fun.join("``, " + "``" + prefix) + "``",
          true
        )
        .addField(
          `🎮 **| Gᴀᴍᴇꜱ - [${
            client.commands.filter(cmd => cmd.category === "Games").size
          }]**`,
          "``" + prefix + games.join("``, " + "``" + prefix) + "``",
          true
        )
        .addField(
          `<:CaMeRa:759137784039473222> **| Iᴍᴀɢᴇ - [${
            client.commands.filter(cmd => cmd.category === "Image").size
          }]**`,
          "``" + prefix + image.join("``, " + "``" + prefix) + "``",
          true
        )
        .addField(
          `<a:MOD:758014286386692166> **| Mᴏᴅᴇʀᴀᴛɪᴏɴ - [${
            client.commands.filter(cmd => cmd.category === "Moderation").size
          }]**`,
          "``" + prefix + moderation.join("``, " + "``" + prefix) + "``",
          true
        )
        .addField(
          `<a:MUSIC:758015236254072922> **| Mᴜꜱɪᴄ - [${
            client.commands.filter(cmd => cmd.category === "Music").size
          }]**`,
          "``" + prefix + music.join("``, " + "``" + prefix) + "``",
          true
        )
        .addField(
          `<a:LOADING:758016164348690543> **| Uᴛɪʟɪᴛʏ - [${
            client.commands.filter(cmd => cmd.category === "Utility").size
          }]**`,
          "``" + prefix + utility.join("``," + "``" + prefix) + "``",
          true
        );
      message.channel.send(embed);
    }
  }
};
