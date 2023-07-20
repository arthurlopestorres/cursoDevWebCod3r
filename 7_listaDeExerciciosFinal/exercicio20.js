// Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão deverá ser de duas casas decimais, arredondando se necessário.

function Triagulo (altura, base) {
    this.altura = altura
    this.base = base
    this.calculaArea = () => {
        return ((this.base * this.altura) / 2).toFixed(2)
    }
}

let triangulo = new Triagulo(23.2, 12.7)
console.log(triangulo.calculaArea())