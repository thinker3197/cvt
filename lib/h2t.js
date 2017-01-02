const h2t = (hex) => {
    let text = '';

    hex = hex.split(' ');

    hex.map(function(e) {
        text += String.fromCharCode(parseInt(e, 16));
    });

    return text;
}

module.exports = h2t;