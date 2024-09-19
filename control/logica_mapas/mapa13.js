export class mapa13{

    constructor(){
       
        this.quantPassosX = 0;
        this.quantPassosY = 0;
        this.dir = 'direita';
        this.p = 1;
        this.continua = false;
        this.linha_comandos = [];
        this.repita = 0;
        this.cores_encontradas = [];
        this.repeteEsperar = [];
        this.achouCor = false;
        this.vaiEsperar = false;
    }

    checarDesafio() {

        Blockly.serialization.workspaces.save(Blockly.getMainWorkspace());
        this.code = javascript.javascriptGenerator.workspaceToCode(Blockly.getMainWorkspace());

        this.linha_comandos = this.code.split("");
        this.linha_comandos = this.linha_comandos.filter(function(element) {
            return element !== ' ';
        });
        this.cores_encontradas = this.linha_comandos.filter(item => isNaN(item));
        

        const cleanedArray = [];

            // Process each item in the cores_encontradas array
            for (let i = 0; i < this.cores_encontradas.length; i++) {
                // Remove occurrences of the letter "e"
                let cleanedItem = this.cores_encontradas[i].replace(/e/g, '');
                
                // Remove any blank spaces
                cleanedItem = cleanedItem.replace(/\s+/g, '');
                
                // Add to the new array if it's not an empty string
                if (cleanedItem !== '') {
                    cleanedArray.push(cleanedItem);
                }
            }

            // Assign the cleaned array to cores_encontradas
            this.cores_encontradas = cleanedArray;
        for (let i = 0; i < this.linha_comandos.length - 1; i++) {
            if (this.linha_comandos[i] === 'e' && this.linha_comandos[i + 1] === '6') {
                this.vaiEsperar = true;
                break; 
            }
        }

        this.repeteEsperar = this.linha_comandos.filter((item, index) => this.linha_comandos.indexOf(item) !== index);

        if(this.repeteEsperar.length > 2){
            this.vaiEsperar == true;
        }

        }
        
            
}