import { startDocLoader } from "../model/game/startDocLoader.js";

const elements = new startDocLoader();

let checouMensagem = false;


elements.mostrarNotas.addEventListener('click', function() {

    elements.modalContent.textContent = "Para melhor visualização, recomenda-se ajustar o zoom do navegador até a exibição completa do ambiente";

    elements.modal.classList.remove('hidden');
    checouMensagem = true;
    
    
});
window.onclick = function(event) {
    if (event.target == elements.modal) {
        elements.modal.classList.add('hidden');
        checouMensagem = true;
    }
}
elements.modalArea.addEventListener('click', function() {
    elements.modal.classList.toggle('hidden');
    
});


elements.buttonContinue.addEventListener('click', function() {

    if (confirm("Para melhor visualização, recomenda-se ajustar o zoom do navegador até a exibição completa do ambiente")) {

        if (!localStorage.getItem('save')) {
   
            localStorage.setItem('save', '00|01|03|04');
        }
    
        location.replace('/view/game.html');
            
    }
  
});


elements.buttonResetSave.addEventListener('click', function() {

        if (confirm("Tem certeza que deseja iniciar um novo jogo? ESTA AÇÃO É IRREVERSÍVEL!")) {
            
            localStorage.removeItem('save', '00|01|03|04');
            alert("Dados deletados com sucesso!");
                
        }       
});
