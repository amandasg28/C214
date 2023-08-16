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
  
  const filme1 = new Filme ('Homem Aranha', 2007, '2h20m', 'Ação/Aventura')
  filme1.assistido();
  filme1.avaliado(9);
  filme1.detalhes();
  
  const filme2 = new Filme ('Mulher Maravilha', 2017, '2h21m', 'Ação/Aventura')
  filme2.assistido();
  filme2.avaliado(8.5);
  filme2.detalhes();
  
  const filme3 = new Filme ('Capitão América', 2011, '2h04m', 'Ação/Aventura')
  filme3.assistido();
  filme3.avaliado(5.0);
  filme3.detalhes();
