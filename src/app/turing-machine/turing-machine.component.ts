import { Component, OnInit } from '@angular/core';
import { MachineActions } from './helpers';

@Component({
  selector: 'app-turing-machine',
  templateUrl: './turing-machine.component.html',
  styleUrls: ['./turing-machine.component.css']
})
export class TuringMachineComponent implements OnInit {
  
  
  constructor() { }
  
  ngOnInit() {
  }
  
  symbolInputValue: string = null;
  
  actions = [new MachineActions];
  symbols = [ "_", 'a' ];
  states = ['->', 0, 1];
  directions = [
    'esquerda',
    'ditreita',
  ];

  
  
  currentState: any;

  submitSymbol() {
    if(this.symbolInputValue) {
      if(!this.symbols.includes(this.symbolInputValue)) {
        this.symbols.push(this.symbolInputValue);
        this.symbolInputValue = null;
      }
    }

  }

  removeSymbol(i) {
    if(i != 0) this.symbols.splice(i,1);
  }

  createState() {
    this.states.push((this.states.length - 1));
  }
  
  removeState(i) {
    if(i != 0) this.states.splice(i,1);
  }

  createAction(){
    this.actions.push(new MachineActions);
  }

  removeAction(i) {
   if(i) this.actions.splice(i,1);
  }

  // startProcess(tapeSimbols: Array<any>) {

  //   this.currentState = '->';
  //   for (let i = 0; i < tapeSimbols.length; i) {
      
       
  //     let entrySimbol = tapeSimbols[i];
  //     // seta objeto do estado e a ação a ser feita
  //     // let state = this.getState();
  //     // let action = this.getAction(state, entrySimbol);

  //     // se for estado final para a maquina
  //     if(action.isEndState) {
  //       break;

  //     } else {

  //       // atualiza o estado
  //       this.currentState = action.nextSate;

  //       // escreve o simbolo na fita
  //       console.log(action.writeSimbol);

  //       // verifica a direção e move o cabeçote
  //       if(action.direction == 'left') {
  //         i--;

  //       } else if( action.direction == 'right') {
  //         i++;
  //       }

  //     }

  //   }

  // }

  // getAction(state, simbol) {
  //   //retorna ação a ser executada
  //   return state.actions.map((action) => {
  //       if(action.entrySimbol == simbol) {
  //         return action;
  //       }
  //   })
  // }

  // getState() {
  //   // retorna objeto do estado
  //   return this.actionTable.map( (state) => {
  //     if(this.currentState == state.stateSimbol) {
  //       return state;
  //     }
  //   });
  // }

}
