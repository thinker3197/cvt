const b2t = binary =>
  binary.split(' ')
    .map(el => String.fromCharCode(parseInt(el, 2)))
      .join('')

module.exports = b2t;