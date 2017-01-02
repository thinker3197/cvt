const t2h = (text) => {
    let hex = '';

    for (let i = 0, l = text.length; i < l; ++i, hex += ' ') {
        const e = text[i] !== ' ' ? text[i].charCodeAt(0).toString(16) : '20';
        hex += e > 99 ? e : '0' + e;
    }

    return hex;
}

module.exports = t2h;