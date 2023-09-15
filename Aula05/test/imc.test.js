const { expect } = require('chai');
const { calcularIMC, categoriaIMC } = require('../src/imc');

describe('Calculadora de IMC', () => {

  it('Calculadora deve rodar tranquilo', () => {
    const peso = 80; // 80 kg
    const altura = 180; // 180 cm

    const IMEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal(IMEsperado);
  });

  it('altura = 0, entrada inadequada', () => {
    const peso = 70; // 70 kg
    const altura = 0; // 0 cm

    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal('NaN');
  });

  it('Categorizar o IMC', () => {
    const peso = 70;
    const altura = 171;

    const categoria = categoriaIMC(peso, altura);

    expect(categoria).to.equal('Peso normal');
  });

  it('Deve calcular o IMC para uma pessoa abaixo do peso', () => {
    const peso = 50; 
    const altura = 160; 

    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado.categoria).to.equal('Abaixo do peso');
  });

});