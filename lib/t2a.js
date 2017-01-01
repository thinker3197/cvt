const t2a = (text) => {
    const words = text.split(' '),
        ascii = [];
    words.map(function(e) {
        // prevent inclusion of extra whitespaces
        if (e !== '') {
            let output = '';

            for (let i = 0; i < e.length; ++i, output += ' ') {
                const a = e[i].charCodeAt(0);
                output += a > 100 ? a : '0' + a;
            }
            ascii.push(output);
        }
    });
    return ascii.join('  ');
}

module.exports = t2a;