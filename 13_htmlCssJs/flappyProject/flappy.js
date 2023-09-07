function novoElemento(tagname, classname){
    const elem = document.createElement(tagname)
    elem.className = classname

    return elem
}

//! estamos definindo, por padrão que as barreiras vão ser na posição normal (não reversa), haverá uma condição que, se reverso for verdadeiro, então top = 0 e borda troca de posição para a parte inferior do corpo:
function Barreira(reversa = false){ 
    this.barreira = novoElemento('div', 'barreira')
    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')

    //? nessa etapa, vamos adicionar o corpo e a borda dentro da barreira, a depender de se 'reversa' é true or false na chamada da função
    this.barreira.appendChild(reversa ? corpo : borda)
    this.barreira.appendChild(reversa ? borda : corpo)

    //? vamos agora criar um método (função) dentro da função construtura "Barreira"(atual) que nos permita definir de forma aleatória a altura da barreira.
    this.setAltura = altura => corpo.style.height = `${altura}px`
}

//! vamos criar agora uma função construtora responsável por imprimir as barreiras dinamicamente
function ParDeBarreiras(altura, abertura, x){
    this.parDeBarreiras = novoElemento('div', 'par-de-barreiras')
    this.superior = new Barreira(true) //criando a barreira superior (bloco e corpo)
    this.inferior = new Barreira(false) //criando a barreira inferior (corpo e bloco)

    //? vamos inserir as barreiras em "par de barreiras"
    this.parDeBarreiras.appendChild(this.superior.barreira)
    this.parDeBarreiras.appendChild(this.inferior.barreira)

    //? vamos criar agora uma função que tem como objetivo sortear a altura com que a abertura entre o par de barreiras vai aparecer.
    this.sortearAbertura = () => {
        //nos cálculos abaixo, altura é a altura total do jogo e a abertura é o gap entre as barreiras em pixels
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior

        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    //? vamos verificar a posição no eixo x em que o par de barreiras se encontra:
    this.getX = () => parseInt(this.parDeBarreiras.style.left.split('px')[0]) //pegando a penas o valor ao lado de px, para converter em dados numérico

    //? precisamos fazer com que a barreira apareça mais de uma vez no eixo x:
    this.setX = x => this.parDeBarreiras.style.left = `${x}px`

    //? vamos identificar a largura do par de barreiras:
    this.getLargura = () => this.parDeBarreiras.clientWidth //clientWidth = pega a largura do elemento (VISÍVEL)

    this.sortearAbertura() //executando a função escrita anteriormente
    this.setX(x)
}

//! vamos criar agora uma nova função construtora que tem como objetivo fazer a criação de barreiras
function Barreiras(alturaDoJogo, larguraDoJogo, aberturaEntreBarreiras, espacoXentreAsBarreiras, notificarPonto){ //notificar ponto é uma função que terá como objetivo fazer com que a pontuação aumente quando a barreira passar pelo meio do jogo no eixo x (notificar ponto é uma função de callBack) 
    this.pares = [
        new ParDeBarreiras(alturaDoJogo, aberturaEntreBarreiras, larguraDoJogo), //passando a largura do jogo como elemento de posição x do par de barreiras, fazemos com que ela seja gerada logo após o fim da área do jogo, assim, ela vai entrando em tela, conforme formos animando o eixo x.

        new ParDeBarreiras(alturaDoJogo, aberturaEntreBarreiras, larguraDoJogo + espacoXentreAsBarreiras), // isso define que esta barreira será gerada no eixo x depois certa quantidade de pixel depois da primeira, acima.

        new ParDeBarreiras(alturaDoJogo, aberturaEntreBarreiras, larguraDoJogo + espacoXentreAsBarreiras * 2), //segue a mesma ideia do par de cima.

        new ParDeBarreiras(alturaDoJogo, aberturaEntreBarreiras, larguraDoJogo + espacoXentreAsBarreiras * 3) //segue a mesma ideia do par de cima.
    ]

    //? vamos deifinir uma constante de deslocamento (de quantos em quantos pixel as barreiras vão sendo animadas):
    const deslocamento = 3

    //? vamos criar uma função que anime as barreiras. Fora desta fnção construtura, posteriormente, faremos a funcionalidade de setInterval para executar esta função a cada x segundos.
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)

            //? quando o par de barreiras sai da tela, precisamos sortear novamente seu local de espaçamento (sorteando de novo a altura da superior) e colocar o par de barreiras no final fila.
            if(par.getX() < -par.getLargura()){
                par.setX(par.getX() + espacoXentreAsBarreiras * this.pares.length) //jogando para o fim da fila
                par.sortearAbertura() // sorteando novamente o tamanho do corpo superior e inferior, para mudar a altura do espaçamento.
            }

            const meioDoJogo = larguraDoJogo / 2
            const cruzouOmeio = par.getX() + deslocamento >= meioDoJogo 
                && par.getX() < meioDoJogo
            cruzouOmeio && notificarPonto() //&&, nesse caso, é uma estratégia que faz com que a leitura do segundo elemento só seja feita, se o primeiro elemento for true.
        })
    }
}

//! vamos criar agora a funcionaliade do pássaro
function Passaro(alturaDoJogo){
    let voando = false //quando o usuário apertar qualquer tecla do teclado, ele troca o voando para true e o passaro começa a subir
    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = './imgs/passaro.png'

    //? vamos definir uma função para verificar a altura do passaro na tela e também para setar uma nova altura
    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    //? vamos manipular agora os eventos de teclado para mexer no comportamento do passaro
    window.addEventListener('keydown', e => {
        voando = true
    })
    window.addEventListener('keyup', e => {
        voando = false
    })

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5)
        const alturaMaximaDeVoo = alturaDoJogo - this.elemento.clientHeight

        if (novoY <= 0){
            this.setY(0)
        } else if(novoY > alturaMaximaDeVoo){
            this.setY(alturaMaximaDeVoo)
        } else {
            this.setY(novoY)
        }
    }

    this.setY(alturaDoJogo / 2)
}

//! vamos criar agora uma função responsável por controlar a pontuação
function Progresso() {
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos //estamos inserindo a pontuação dentro do span criado acima.
    }
    this.atualizarPontos(0) //inicialmente, a pontuação é zero
}

//! verificando colisão:
function estaoSobrepostos(elementoA, elementoB){
    const a = elementoA.getBoundingClientRect() //estamos verificando aqui o retangulo associado ao elemento A
    const b = elementoB.getBoundingClientRect() //estamos verificando aqui o retangulo associado ao elemento B

    const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top

    return horizontal && vertical
}

function colidiu(passaro, barreiras){
    let colidiu = false //colisao como falso por padrao
    barreiras.pares.forEach(par => {
        if(!colidiu){
            const superior = par.superior.barreira
            const inferior = par.inferior.barreira
            colidiu = estaoSobrepostos(passaro.elemento, superior) ||  estaoSobrepostos(passaro.elemento, inferior)
        }
    })
    return colidiu
}

//! vamos criar a função  que define o jogo
function FlappyBird(){
    let pontos = 0
    const areaDoJogo = document.querySelector('[wm-flappy]')
    const alturaDoJogo = areaDoJogo.clientHeight
    const larguraDoJogo = areaDoJogo.clientWidth

    const progresso = new Progresso()
    const barreiras = new Barreiras(alturaDoJogo, larguraDoJogo, 200, 400, () => progresso.atualizarPontos(++pontos))
    const passaro = new Passaro(alturaDoJogo)

    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.parDeBarreiras))

    //? criando a função que inicia o jogo:
    this.start = () => {
        //loop do jogo
        const temporizador = setInterval(() => {
            barreiras.animar()
            passaro.animar()

            if(colidiu(passaro, barreiras)){
                clearInterval(temporizador)
                throw 'SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI'
            }
        }, 20)
    }
}

new FlappyBird().start()