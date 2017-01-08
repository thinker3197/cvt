const t2b = text =>     
    text.split('')
        .map(el => el.charCodeAt(0).toString(2))
            .join(' ')

module.exports = t2b;