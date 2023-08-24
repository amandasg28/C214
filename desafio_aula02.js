const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

class Filme {
    constructor(titulo, ano, duracao, genero) {
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistir = false;
        this.avaliar = null;
    }
  
    detalhes() {
        console.log(`Filme:
            Título: ${this.titulo}
            Ano: ${this.ano}
            Duração: ${this.duracao} 
            Gênero: ${this.genero}
            Assistido: ${this.assistir ? 'Sim' : 'Não'}
            Avaliação: ${this.avaliar}`);
    }
  
    assistido() {
        this.assistir = true;
    }
  
    avaliado(nota) {
        this.avaliar = nota;
    }
  }
  
  const filmes = []
  escolha = 0;

  function menu() {
    console.log('1- Adicionar um novo filme');
    console.log('2- Marcar um filme como assistido');
    console.log('3- Avaliar um filme');
    console.log('4- Exibir a lista de filmes');
    console.log('5- Sair do programa');
    console.log('Escolha uma opção: ')
}

function adiciona() {
    rl.question('Título: ', titulo => {
        rl.question('Ano: ', ano => {
            rl.question('Gênero: ', genero => {
                rl.question('Duração: ', duracao => {
                    const novoFilme = new Filme(titulo, ano, genero, duracao);
                    filmes.push(novoFilme);
                    console.log(`${novoFilme.titulo} foi adicionado à lista de filmes.`);
                    menu()
                });
            });
        });
    });
}

function marca() {
    if (filmes.length === 0) {
        console.log('Lista vazia.')
        menu()
    }

    else {
        rl.question('Escolha um índice da lista de filmes: ', indice => {
            if (indice >= 0 && indice < filmes.length) {
                filmes[indice].assistido();
                console.log(`${filmes[indice].titulo} foi marcado como assistido.`);
            } else {
                console.log('Filme não listado.');
            }
            menu()
        });
    }
}

function avalia() {
    if (filmes.length === 0) {
        console.log('Lista vazia.')
    }

    else {
        rl.question('Escolha um índice da lista de filmes: ', indice => {
            rl.question('Digite uma nota de 0 a 10 para o filme: ', nota => {
                if (indice >= 0 && indice < filmes.length && !isNaN(nota) && nota >= 0 && nota <= 10) {
                    filmes[indice].avaliado(parseFloat(nota));
                    console.log('Avaliação concluída.');
                } else {
                    console.log('Nota inválida.');
                }
                menu()
            });
        });
    }

}

function exibe() {
    if (filmes.length !== 0) {
        console.log('Lista de Filmes: ');
        filmes.forEach((filme, indice) => {
            console.log(`${filme.detalhes()}`);
        });
    }
    else console.log('Lista vazia.')

    menu()
}

exibe()

rl.on('line', usuario => {

    escolha = parseInt(usuario)

    switch (escolha) {
        case 1:
            adiciona()
            break
        case 2:
            marca()
            break
        case 3:
            avalia()
            break
        case 4:
            exibe()
            break
        case 5:
            rl.close()
            break
        default:
            console.log('Opção inválida.')
            menu()
            break
    }
});