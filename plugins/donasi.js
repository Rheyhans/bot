let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085895001126]
│ • Telkomsel [081319944687]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://saweria.co/Rheyhanputra
│ • Dana [085895001126]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
