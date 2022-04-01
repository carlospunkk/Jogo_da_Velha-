var jogador,
  vencedor = null
var JGselecionado = document.getElementById('jogador-selecionado')
var VCselecionado = document.getElementById('vencedor-selecionado')

MDjogador('X')

function EscolherQuadrado(id) {
  if (vencedor !== null) {
    return
  }
  var quadrado = document.getElementById(id)
  if (quadrado.innerHTML !== '-') {
    return
  }

  quadrado.innerHTML = jogador
  quadrado.style.color = '#034'

  if (jogador === 'X') {
    jogador = 'O'
  } else {
    jogador = 'X'
  }

  MDjogador(jogador)
  checaVencedor()
}

function MDjogador(valor) {
  jogador = valor
  JGselecionado.innerHTML = jogador
}
function checaVencedor() {
  var quadrado1 = document.getElementById(numero1)
  var quadrado2 = document.getElementById(numero2)
  var quadrado3 = document.getElementById(numero3)
  var quadrado4 = document.getElementById(numero4)
  var quadrado5 = document.getElementById(numero5)
  var quadrado6 = document.getElementById(numero6)
  var quadrado7 = document.getElementById(numero7)
  var quadrado8 = document.getElementById(numero8)
  var quadrado9 = document.getElementById(numero9)

  if (checasequencia(quadrado1, quadrado2, quadrado3)) {
    mudarcorquadrado(quadrado1, quadrado2, quadrado3)
    mudarVencedor(quadrado1)
    return
  }
  if (checasequencia(quadrado4, quadrado5, quadrado6)) {
    mudarcorquadrado(quadrado4, quadrado5, quadrado6)
    mudarVencedor(quadrado4)
    return
  }
  if (checasequencia(quadrado7, quadrado8, quadrado9)) {
    mudarcorquadrado(quadrado7, quadrado8, quadrado9)
    mudarVencedor(quadrado7)
    return
  }
  if (checasequencia(quadrado1, quadrado4, quadrado7)) {
    mudarcorquadrado(quadrado1, quadrado4, quadrado7)
    mudarVencedor(quadrado1)
    return
  }
  if (checasequencia(quadrado2, quadrado5, quadrado8)) {
    mudarcorquadrado(quadrado2, quadrado5, quadrado8)
    mudarVencedor(quadrado2)
    return
  }
  if (checasequencia(quadrado3, quadrado6, quadrado9)) {
    mudarcorquadrado(quadrado3, quadrado6, quadrado9)
    mudarVencedor(quadrado3)
    return
  }
  if (checasequencia(quadrado1, quadrado5, quadrado9)) {
    mudarcorquadrado(quadrado1, quadrado5, quadrado9)
    mudarVencedor(quadrado1)
    return
  }
  if (checasequencia(quadrado3, quadrado5, quadrado7)) {
    mudarcorquadrado(quadrado3, quadrado5, quadrado7)
    mudarVencedor(quadrado3)
  }
}

function mudarVencedor(quadrado) {
  vencedor = quadrado.innerHTML
  VCselecionado.innerHTML = vencedor
}

function mudarcorquadrado(quadrado1, quadrado2, quadrado3) {
  quadrado1.style.background = '#00FA9A'
  quadrado2.style.background = '#00FA9A'
  quadrado3.style.background = '#00FA9A'
}

function checasequencia(quadrado1, quadrado2, quadrado3) {
  var eigual = false
  if (
    quadrado1.innerHTML !== '-' &&
    quadrado1.innerHTML === quadrado2.innerHTML &&
    quadrado2.innerHTML === quadrado3.innerHTML
  ) {
    eigual = true
  }
  return eigual
}
function reiniciar() {
  vencedor = null
  VCselecionado.innerHTML = ''

  for (var i = 1; i <= 9; i++) {
    var quadrado = document.getElementById(i)
    quadrado.style.background = '#000'
    quadrado.style.color = '#000'
    quadrado.innerHTML = '-'
  }
  MDjogador('X')
}
