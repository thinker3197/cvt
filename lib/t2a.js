const t2a = text =>
    text.split('')
        .map(el => el.charCodeAt(0))
            .join(' ')

module.exports = t2a;