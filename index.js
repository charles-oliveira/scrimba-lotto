function getLottoNumbers() {
    const lottoNumbers = []
    for (let i = 0; i < 6; i++) {
        lottoNumbers.push(Math.floor(Math.random()*100))
    }
    return lottoNumbers
}

// O método .map() abaixo copia o array gerado pela função 'getLottoNumbers'
// com seis números gerados aleatoriamente entre 0 - 99 

 document.getElementById('winning-btn').addEventListener('click', function() {
        function getWinningNumbers() {
            return getLottoNumbers().map(function(num) {
            return `<div class="number">${num}</div>`
        }).join('')
    }
    document.getElementById('winnings-numbers').innerHTML = getWinningNumbers()
 })