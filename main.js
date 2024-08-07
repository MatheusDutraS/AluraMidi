//função que toca o Som das teclas com o metódo play()
//(Uso do parâmetro) Quando for invocado ele colocara o valor que irá receber (idElementoAudio) no local determinado (query.Selector(idElementoAudio))
function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado');
    }
}

//criação de uma lista com todos os seletores que têm a classe .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');

//laço de repetição
for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];                             //Constante que recebe os valores da lista de teclado
    const instrumento = listaDeTeclas[i].classList[1];          //Constante que recebe a classe da tecla
    const idAudio = `#som_${instrumento}`;  //Template string   //Constante que forma o id do audio
    
    tecla.onclick = function () {
        tocaSom(idAudio);                                       //Invocação da função dando o parâmetro idAudio (Uso do parâmetro)
    }

    tecla.onkeydown = function (event) {
        console.log(event.code)

        if (event.code === 'Space' || event.code === 'Enter') {
            listaDeTeclas[i].classList.add('ativa');
        }
    
    }

    tecla.onkeyup = function () {
        listaDeTeclas[i].classList.remove('ativa');
    }
}
