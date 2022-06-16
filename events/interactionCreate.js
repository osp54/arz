const { confirm } = require('../buttons')

module.exports = {
    name: 'interactionCreate',
    execute(interaction, bot) {
        if (interaction.customId == 'confirm') {
            var role = bot.member.guild.roles.cache.get('986974919197851678')
            bot.member.roles.add(role)
            interaction.reply('Выдано роль. Если нет выдайте ее сами.')
        } else if (interaction.customId == 'decline') {
            bot.member.send('Ваш запрос отклонен.')
            interaction.reply('Отклонен.')
        }
    }
}