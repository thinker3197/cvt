const a2t = (ascii) => {
    let text = '';

    ascii = ascii.split(' ');

    ascii.map(function(e) {
        text += String.fromCharCode(e);
    });

    return text;
}

module.exports = a2t;