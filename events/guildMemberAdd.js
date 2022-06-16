module.exports = {
    name: 'guildMemberAdd',
    execute(member, bot) {
        var channel = bot.channels.cache.get('986974554570235944').send('<@' + member.id + '>, пожалуйста, измените ваш ник на ник как в игре и напишите в чат следующее:\n`!veref`');
    }
}