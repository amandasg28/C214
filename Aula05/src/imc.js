function calcularIMC(peso, altura) {
    if (altura === 0) {
      return 'NaN'; // Retorna "NaN" se a altura for igual a zero
    }
  
    const alturaMetros = altura / 100; // Converte altura de centímetros para metros
    return (peso / (alturaMetros * alturaMetros)).toFixed(2); // Calcula o IMC com duas casas decimais
}

function categoriaIMC(peso, altura) {
  const imc = calcularIMC(peso, altura);

  if (imc < 18.5) {
      return 'Abaixo do peso';
  } else if (imc >= 18.5 && imc < 25) {
      return 'Peso normal';
  } else if (imc >= 25 && imc < 30) {
      return 'Sobrepeso';
  } else if (imc >= 30 && imc < 35) {
      return 'Obesidade Grau I';
  } else if (imc >= 35 && imc < 40) {
      return 'Obesidade Grau II (severa)';
  } else {
      return 'Obesidade Grau III (mórbida)';
  }
}

module.exports = { calcularIMC, categoriaIMC }; 
