const { confirm } = require('../buttons')

exports.run = async (bot, message, args) => {
    message.channel.send("Ожидайте на подтверджение от администрации.");
    var channel = bot.channels.cache.get('987002412436959262').send({content: '<@' + message.author.id + '>', components: [confirm]})
    bot.member = bot.guilds.cache.get('986973263022407700').members.cache.get(message.author.id)
    
}

exports.help = {
    name:"veref"
}