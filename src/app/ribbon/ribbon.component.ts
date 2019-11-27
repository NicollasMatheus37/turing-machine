import { Component, OnInit, Input } from "@angular/core";
import { MachineActions } from '../turing-machine/helpers';

@Component({
    selector: 'ribbon',
    templateUrl: './ribbon.component.html'
})
export class RibbonComponent implements OnInit {

    @Input() actions: Array<MachineActions>;

    // valor inserido para a fita
    ribbon;

    // variavel que detem o estado atual durante o processo
    currentState;

    // propriedade respoansável pela velocidade do cabeçote;
    ribbonSpeed: number = 400;

    constructor() { }

    ngOnInit() { }


    async startProcess() {
        if (this.ribbon) {

            console.log(this.actions);

            // atribui o estado inicial
            this.currentState = '->';

            // prepara o array com os item da fita mantendo simbolo de estado inicial no começo
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

                    // atualiza o estado
                    this.currentState = action.nextSate;

                    // escreve o simbolo na fita
                    console.log("estado: " + this.currentState + ' index:' + i + ' Prox Símbolo:' + action.writeSimbol + ' Sim. Atual:' + ribbonSymbols[i]);
                    ribbonSymbols[i] = action.writeSimbol;
                    console.log('Fita:' + ribbonSymbols);

                    // verifica a direção e move o cabeçote
                    if (action.direction == 'PARA') {
                        isEnd = true;
                        return "Fim";

                    }

                    if (action.direction === 'E') {
                        if (i == 0) {
                            ribbonSymbols.unshift('_');
                        }
                        i--;

                    }

                    if (action.direction === 'D') {
                        if (i == ribbonSymbols.length - 1) {
                            ribbonSymbols.push('_');
                        }
                        i++;
                    }

                } else {
                    console.error("ação nao encontrada");
                    console.log('Fita:' + ribbonSymbols + ' Index:' + i);

                    return "Erro";
                }
                await this.delay(this.ribbonSpeed);
            }


        }

    }

    delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
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