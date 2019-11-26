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

    constructor() { }

    ngOnInit() { }


    startProcess() {

        this.currentState = '->';
        let ribbonSymbols: Array<string> = this.ribbon.split('');

        for (let i = 0; i < ribbonSymbols.length;) {

            let entrySimbol = ribbonSymbols[i];

            // filtra as ações do estado e a ação correta de acordo com a entrada
            let stateActions = this.getActionsByState();
            let action = this.getActionBySymbol(stateActions, entrySimbol);

            if (action) {
                // se for estado final para a maquina
                if (action.direction == 'PARA') {
                    return "Fim";

                } else {

                    // atualiza o estado
                    this.currentState = action.nextSate;

                    // escreve o simbolo na fita
                    console.log("estado: " + this.currentState + ' index:' + i + ' Símbolo:' + action.writeSimbol);
                    ribbonSymbols[i] = action.writeSimbol;
                    console.log('Fita:' + ribbonSymbols);

                    // verifica a direção e move o cabeçote
                    if (action.direction == 'E') {
                        if(i == 0) {
                            ribbonSymbols.unshift('_');
                        }
                        i--;

                    } else if (action.direction == 'D') {
                        if(i == ribbonSymbols.length) {
                            ribbonSymbols.push('_');
                        }
                        i++;
                        
                    }

                }
            } else {
                console.error("ação nao encontrada");
                return "Erro";
            }

        }

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