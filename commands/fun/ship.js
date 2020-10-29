const Discord = require("discord.js");

module.exports = {
  name: "ship",
  category: "Fun",
  description: "Sends love result of message author and mentioned user.",
  usage: "ship [@USER]",
  execute: async (client, message, args) => {
    var love = [
      "**420%**|| :smoking::smoking::smoking::smoking::smoking::smoking::smoking::smoking::smoking::smoking: ||**420%**",
      "**0%** || :broken_heart::broken_heart::broken_heart::broken_heart::broken_heart::broken_heart::broken_heart::broken_heart::broken_heart::broken_heart: ||**0%**",
      "**10%**|| :heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart: ||**10%**",
      "**20%**|| :heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart: ||**20%**",
      "**30%**|| :heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart: ||**30%**",
      "**40%**|| :heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart::black_heart: ||**40%**",
      "**50%**|| :heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart::black_heart: ||**50%**",
      "**60%**|| :heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart::black_heart: ||**60%**",
      "**69%**|| :eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant: ||**69%**",
      "**70%**|| :heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart::black_heart: ||**70%**",
      "**80%**|| :heart::heart::heart::heart::heart::heart::heart::heart::black_heart::black_heart: ||**80%**",
      "**90%**|| :heart::heart::heart::heart::heart::heart::heart::heart::heart::black_heart: ||**90%**",
      "**100%**|| :heart::heart::heart::heart::heart::heart::heart::heart::heart::heart: ||**100%**"
    ];

    let user1 =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(
        r =>
          r.user.username.toLowerCase() === args[0].toLocaleLowerCase() ||
          message.member
      ) ||
      message.guild.members.cache.find(
        r => r.displayName === args[0].toLocaleLowerCase()
      );

    let user2 =
      message.mentions.members.first(2)[1] ||
      message.guild.members.cache.get(args[1]) ||
      message.guild.members.cache.find(
        r => r.user.username.toLowerCase() === args[1].toLocaleLowerCase()
      ) ||
      message.guild.members.cache.find(
        r => r.displayName === args[1].toLocaleLowerCase()
      );

    if (!user2) {
      message.reply("Please mention The 2nd User");
      return;
    }
    /*
                        if(!user) return message.channel.send("Can't find user!");
                        if(!user2) return message.channel.send("Can't find user!");
                        */
    let athor = message.member.nickname;
    let author = message.member.nickname;
    let embed = new Discord.MessageEmbed()
      .setThumbnail(
        "https://media.discordapp.net/attachments/427168044528173056/436659295598280725/meterheart.png?width=344&height=344"
      )

      .setDescription(
        " " +
          " " +
          "       __**:heartbeat::bow_and_arrow: MATCHMAKING :bow_and_arrow::heartbeat:**__" +
          "" +
          `\n\n          :small_red_triangle_down:**[**` +
          user1.user.username +
          "**]**" +
          "" +
          "\n          :small_red_triangle:**[**" +
          user2.user.username +
          "**]**" +
          "\n\n" +
          love[Math.floor(Math.random() * love.length)]
      )

      .setColor(0xff0000);

    message.channel.send(embed);
  }
};
