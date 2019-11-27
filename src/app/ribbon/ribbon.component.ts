import { Component, OnInit, Input } from "@angular/core";
import { MachineActions } from '../turing-machine/helpers';

@Component({
    selector: 'ribbon',
    templateUrl: './ribbon.component.html'
})
export class RibbonComponent implements OnInit {

    @Input() actions: Array<MachineActions>;

    ribbon;
    currentState;
    ribbonSpeed: number = 800;

    constructor() { }

    ngOnInit() { }


    async startProcess() {
        if (this.ribbon) {

            console.log(this.actions);
            
            this.currentState = '->';
            let ribbonSymbols: Array<string> = this.ribbon.split('');
            ribbonSymbols.unshift('->');
            let isEnd: boolean = false;
            let i = 0;


            while (!isEnd) {

                // filtra as ações do estado e a ação correta de acordo com a entrada
                let stateActions = this.getActionsByState();
                let action = this.getActionBySymbol(stateActions, ribbonSymbols[i]);

                if (action) {

                    // se for estado final para a maquina
                    if (action.direction == 'PARA') {
                        isEnd = true;
                        return "Fim";

                    } else {

                        // atualiza o estado
                        this.currentState = action.nextSate;

                        // escreve o simbolo na fita
                        console.log("estado: " + this.currentState + ' index:' + i + ' Prox Símbolo:' + action.writeSimbol + ' Sim. Atual:' + ribbonSymbols[i]);
                        ribbonSymbols[i] = action.writeSimbol;
                        console.log('Fita:' + ribbonSymbols);

                        // verifica a direção e move o cabeçote
                        if (action.direction === 'E') {
                            if (i == 0) {
                                ribbonSymbols.unshift('_');
                            }
                            i--;

                        }
                        if (action.direction === 'D') {
                            if (i == ribbonSymbols.length -1) {
                                ribbonSymbols.push('_');
                            }
                            i++;
                        }

                    }
                    
                } else {
                    console.error("ação nao encontrada");
                    console.log('Fita:' + ribbonSymbols);
                    
                    return "Erro";
                }
                await this.delay(this.ribbonSpeed);
            }


        }

    }
    delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }
    getActionBySymbol(actions: Array<MachineActions>, simbol) {
        //retorna ação a ser executada
        return actions.find((action) => action.entrySimbol == simbol);
    }

    getActionsByState() {
        // retorna objeto do estado
        return this.actions.filter((action) => action.state == this.currentState);
    }

}