const t2a = (text) => {
    let ascii = '';

    for (let i = 0, l = text.length; i < l; ++i, ascii += ' ') {
        const e = text[i].charCodeAt(0);
        ascii += e > 99 ? e : '0' + e;
    }

    return ascii;
}

module.exports = t2a;