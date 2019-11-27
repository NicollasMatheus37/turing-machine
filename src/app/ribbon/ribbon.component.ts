import { Component, OnInit, Input } from "@angular/core";
import { MachineActions } from '../turing-machine/helpers';

@Component({
    selector: 'ribbon',
    styleUrls: ['./ribbon.component.css'],
    templateUrl: './ribbon.component.html'
})
export class RibbonComponent implements OnInit {

    @Input() actions: Array<MachineActions>;
    index: number = 0;

    // valor inserido para a fita
    ribbon;
    ribbonSymbols: Array<String>;
    isEnd: boolean = false;
    stateRegister: Array<string> = [];

    // variavel que detem o estado atual durante o processo
    currentState;

    // propriedade respoansável pela velocidade do cabeçote;
    ribbonSpeed: number = 400;

    constructor() { }

    ngOnInit() { }


    async startProcess() {
        this.index = 0;
        this.isEnd = false;
        if (this.ribbon) {

            // atribui o estado inicial
            this.currentState = '->';
            this.stateRegister.push(this.currentState);

            // prepara o array com os item da fita mantendo simbolo de estado inicial no começo
            this.ribbonSymbols = this.ribbon.split('');
            this.ribbonSymbols.unshift('->');

            while (!this.isEnd) {

                // filtra as ações do estado e a ação correta de acordo com a entrada
                let stateActions = this.getActionsByState();
                let action = this.getActionBySymbol(stateActions, this.ribbonSymbols[this.index]);

                if (action) {

                    // se for estado final para a maquina

                    // atualiza o estado
                    this.stateRegister.push(this.currentState);
                    this.currentState = action.nextSate;

                    // escreve o simbolo na fita
                    this.ribbonSymbols[this.index] = action.writeSimbol;

                    // verifica a direção e move o cabeçote
                    if (action.direction == 'PARA') {
                        this.isEnd = true;
                        return "Fim";

                    }

                    if (action.direction === 'E') {
                        if (this.index == 0) {
                            this.ribbonSymbols.unshift('_');
                        }
                        this.index--;

                    }

                    if (action.direction === 'D') {
                        if (this.index == this.ribbonSymbols.length - 1) {
                            this.ribbonSymbols.push('_');
                        }
                        this.index++;
                    }

                } else {
                    return "Erro";
                    alert('Não foi encontrada ação cadastrada para estado: ' + this.currentState + ', entrada:' + this.ribbonSymbols[this.index]);
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

    format(array) {
        return array.join(', ');
    }

}