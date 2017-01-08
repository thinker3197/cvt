const t2h = text =>
    text.split('')
        .map(el => el.charCodeAt(0).toString(16))
            .join(' ')

module.exports = t2h;