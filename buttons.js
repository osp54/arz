const { MessageActionRow, MessageButton } = require("discord.js")

const confirm = new MessageActionRow().addComponents(
    new MessageButton()
        .setCustomId('confirm')
        .setLabel('Выдать роль')
        .setStyle('SUCCESS'),
    new MessageButton()
        .setCustomId('decline')
        .setLabel('Не выдавать роль')
        .setStyle('DANGER')
)

module.exports= {
    confirm: confirm
}
