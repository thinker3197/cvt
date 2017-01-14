const t2r = (text) =>
  text.split('')
    .map(el => (Math.random()*10).toFixed(1) & 1 ? el.toUpperCase() : el.toLowerCase())
      .join('')

module.exports = t2r;