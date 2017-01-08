const a2t = ascii =>
    ascii.split(' ')
        .map(el => String.fromCharCode(el))
            .join('')

module.exports = a2t;