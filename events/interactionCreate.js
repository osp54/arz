const { confirm } = require('../buttons')

module.exports = {
    name: 'interactionCreate',
    execute(interaction, bot) {
        if (interaction.customId == 'confirm') {
            var memberId = interaction.message.content.split(' ')[1].replace('(', '').replace(')', '')
            var member = bot.newMembers[memberId]
            var role = member.guild.roles.cache.get('986974919197851678')
            member.roles.add(role)
            interaction.reply('Выдано роль. Если нет выдайте ее сами.')
        } else if (interaction.customId == 'decline') {
            interaction.reply('Отклонен.')
            var memberId = interaction.message.content.split(' ')[1].replace('(', '').replace(')', '')
            var member = bot.newMembers[memberId]
            member.send('Ваш запрос отклонен.')
        }
    }
}