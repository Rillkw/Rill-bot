let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Pulsa/ [0882003094849]
│ • GOPAY/DANA [085876904365]
│ • Saweria https://saweria.co/mimamadi
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
