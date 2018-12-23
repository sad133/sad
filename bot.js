const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);//لا تحط التوكن حقك هنا


client.on('ready', () => {
    client.user.setStatus(" idle");
 
 });
 

client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
  .addField("***شكرا الانضمامك الينا***" ,member.user.username )
    .setDescription('***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا***')
    .setColor('RANDOM')
    .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
var channel =member.guild.channels.find('name', 'chat')
if (!channel) return;
channel.send({embed : embed});
});
client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","member"));
    });

client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","new"));
    });
	
	client.on('message', message => {
    if (message.content.startsWith("$id")) {
                 if(!message.channel.guild) return message.reply('** This command only for servers**');
 
                var mentionned = message.mentions.users.first();
     var mentionavatar;
       if(mentionned){
           var mentionavatar = mentionned;
       } else {
           var mentionavatar = message.author;
           
       }
    let embed = new Discord.RichEmbed()
   .setColor("RANDOM")
    .setThumbnail(`${mentionavatar.avatarURL}`)
   .addField("Name:",`<@` + `${mentionavatar.id}` + `>`, true)
   .addField('Discrim:',"#" +  `${mentionavatar.discriminator}`, true)
    .addField("ID:", "**[" + `${mentionavatar.id}` + "]**", true)
   .addField("Create At:", "**[" + `${mentionavatar.createdAt}` + "]**", true)
      
      
   message.channel.sendEmbed(embed);
   console.log('[id] Send By: ' + message.author.username)
     }
 });
 client.on('message', message => {
    var prefix = "$";
    
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**$bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .addField('» السيرفر :', `${message.guild.name}`)
                .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
                .addField(' » الرسالة : ', args)
                .setColor('#ff0000')
                // m.send(`[${m}]`);
                m.send(`${m}`,{embed: bc});
            });
        }
        } else {
            return;
        }
    });
    

client.on("message", (message) => {
    if (message.content.startsWith("$kick")) {
      if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('? ماعندك الصلاحيات');
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + " مع السلامه :wave: ");
        }).catch(() => {
            message.channel.send("Error -_-");
        });
    }
});

  client.on('message', message => {
    if (!message.channel.guild) return;
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("***  ليس معك صلاحيات  ***")
    var prefix = "$";
       if (message.content ===   prefix + "add role") {
    message.channel.send("<@" + message.author.id + ">  ***  جاري اعطاء الرتبة للاعضاء كما امرت  *** ")
    message.guild.members.forEach(m => {
    m.addRole(message.guild.roles.find('name', 'اسم الرتبة'))
    })
    }
    
       if (message.content ===   prefix + "remove role") {
    message.channel.send("<@" + message.author.id + ">  ***  جاري اعطاء الرتبة للاعضاء كما امرت  *** ")
    message.guild.members.forEach(m => {
    m.removeRole(message.guild.roles.find('name', 'اسم الرتبة'))
    })
    }
    
    });
	client.on('message', message => {
    if(!message.channel.guild) return;
if (message.content.startsWith('$ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms :signal_strength: ")
.addField('**WebSocket:**',api + " ms :signal_strength: ")
message.channel.send({embed:embed});
}
});

client.on('message', message => {
    var prefix = "$";
        if(message.content == prefix + 'server') {
            var servername = message.guild.name
            var اونر = message.guild.owner
            var اعضاء = message.guild.memberCount
            var ايدي = message.guild.id
            var بلدالسيرفر = message.guild.region
            var الرومات = message.guild.channels.size
            var الرتب = message.guild.roles
            var عمل = message.guild.createdAt
            var الروم = message.guild.defaultChannel
            var afk = message.guild.afkChannel
            var ownerid = message.guild.ownerID
            var server = new Discord.RichEmbed()
            .setThumbnail(message.guild.iconURL)
            .addField('اسم السيرفر', servername)
            .addField('اي دي السيرفر ' , [ايدي])
            .addField('أعضاء السيرفر', اعضاء)
            .addField('رومات السيرفر', الرومات)
            .addField('روم الافك', afk)
            .addField('روم الشات الأساسي', الروم)
            .addField('صاحب السيرفر', اونر)
            .addField('اونرايدي', ownerid)
            .addField('بلد السيرفر', بلدالسيرفر)
            .addField('تاريخ افتتاح السيرفر', عمل)
            .setColor('RANDOM')
    
            message.channel.sendEmbed(server)
        }
    });
	client.on("message", message => {
    const prefix = "$"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });
  
  const moment = require('moment');//npm install moment
client.on('message', message => {
             var prefix = "$"
if (message.content.startsWith(prefix + "time")) {
let user = message.mentions.users.first();
var args = message.content.split(" ").slice(1);
var men = message.mentions.users.first();
var heg;
if(men) {
heg = men
} else {
heg = message.author
}
var mentionned = message.mentions.members.first();
var h;
if(mentionned) {
h = mentionned
} else {
h = message.member
}
moment.locale('ar-TN'); //TN
var id = new  Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`${heg.username}#${heg.discriminator} `,heg.avatarURL)
.setDescription([`**الوقت**${moment().format('HH:mm:ss A')}${moment().format('YYYY/M/D')}**اليوم** :${moment().format('dddd')}**التاريخ**`])
message.channel.send(id)
};
});
client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "$unmute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'mute-log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', 'اسكت/احكي')
      .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
  
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
  
    if (message.guild.member(user).removeRole(muteRole.id)) {
  return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
  } else {
      message.guild.member(user).removeRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
  });
    }
  
  };
  
  });

client.on("message", message => {
      if (message.content === "$help") {
       const embed = new Discord.RichEmbed() 
           .setColor("#57FEFF")
           .setDescription(`**⚙️اوامر الادارة|Administrator⚙️**
  ** __$kick__->**طرد
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$ban__->**باند
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$image__->**ميوت
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$time__->**لمعرفه واقت واليوم والتاريخ 
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$mute__->**لاعطاء شخص ميوت
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$id__->**ايدي الشخص 
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$clear__->**حذف الشات
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$ce__->**حذف الشات بعدد
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  ** __$server__->**لمعلومات السيرفر 
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$unmute__->**لفك الميوت عن شخص
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$bc__->**برود كاست 
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`)
     message.author.sendEmbed(embed)
     }
     });
  
     client.on("message", message => {
      if (message.content === "$help") {
       const embed = new Discord.RichEmbed() 
           .setColor("#FF00FF")
           .setFooter('By Mahmoud youssef ')
           .setDescription(`**__أتمنى يعجبكم البوت يا أغلى ناس ❤️ 💛 💚 💙 💜 🖤__**`)
     message.author.sendEmbed(embed)
     
     }
     });

   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` Chat Deleted ``",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)})
});
	 
