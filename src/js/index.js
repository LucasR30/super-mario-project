/* 
Objetivo 1 - quando o usuário clicar no botão de ver trailer, devemos abrir a modal com o vídeo do trailer
    - Passo 1 - dar um jeito de pegar o elemento que representa o botão na tela, usando o JS
    - Passo 2 - dar um jeito de identificar quando o usuário clicar no botão
    - Passo 3 - dar um jeito de pegar o elemento da modal no JS
    - Passo 4 - abrir a modal na tela
Objetivo 2 - quando o usuaário clicar no X devemos fechar a modal
    - Passo 1 - dar um jeito de pegar o elemento de fechar a modal usando o JS
    - Passo 2 - dar um jeito de identificar quando o usuário clicar no X
    - Passo 3 - Fechar a modal
*/


const botaoTrailer = document.querySelector('.botao-trailer');
const modal = document.querySelector('.modal');
const botaoFecharModal = document.querySelector('.fechar-modal');
const video = document.getElementById('video');
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle('aberto');
}


botaoTrailer.addEventListener('click', () => {
    alternarModal();
    video.setAttribute('src', linkDoVideo);
})

botaoFecharModal.addEventListener('click' , () => {
    alternarModal();
    video.setAttribute('src','');
})








