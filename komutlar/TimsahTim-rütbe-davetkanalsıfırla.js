const Discord = require("discord.js");
const Database = require("../Helpers/Database");
// exports.onLoad = (client) => {};
/**
 * @param {Discord.Client} client 
 * @param {Discord.Message} message 
 * @param {Array<String>} args 
 */
exports.run = async (client, message, args) => {
	  const db = new Database("./Servers/" + message.guild.id, "Settings");
    if(!message.member.hasPermission("ADMINISTRATOR") && !message.member.hasPermission("MANAGE_GUILD")) return message.reply(`<a:yaplandrma:771056975609462854> ・ **Bu Komutu Kullanmak İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.**`)
    
    var type = ["Channel"];
    db.set(`settings`);

    message.reply(`Başarılı.`);


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davetkanalsıfırla"],
  permLevel: 0
};

exports.help = {
  name: 'davet-kanal-sıfırla',
  description: 'Davet Log Kanalını Sıfırlarsınız.',
  usage: 'g!davet-kanal-sıfırla'
};