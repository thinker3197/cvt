const h2t = hex => 
    hex.split(' ')
        .map(el => String.fromCharCode(parseInt(el, 16)))
            .join('')
            
module.exports = h2t;