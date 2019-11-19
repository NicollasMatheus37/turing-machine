import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turing-machine',
  templateUrl: './turing-machine.component.html',
  styleUrls: ['./turing-machine.component.css']
})
export class TuringMachineComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }
  
  actionTable = [
    {
      
      stateSimbol: null,
      actions: [{
        
        currentSimbol: null,
        nextSateSimbol: null,
        writeSimbol: null,
        direction: null,
        isEndState: 0
        
      }]
      
    }
  ];
  
  currentState: any;
  
  startProcess(tapeSimbols: Array<any>) {

    this.currentState = '->';
    for (let i = 0; i < tapeSimbols.length; i) {
      
       
      let currentSimbol = tapeSimbols[i];
      // seta objeto do estado e a ação a ser feita
      let state = this.getState();
      let action = this.getAction(state, currentSimbol);

      // se for estado final para a maquina
      if(action.isEndState) {
        break;

      } else {

        // atualiza o estado
        this.currentState = action.nextSateSimbol;

        // escreve o simbolo na fita
        console.log(action.writeSimbol);

        // verifica a direção e move o cabeçote
        if(action.direction == 'left') {
          i--;

        } else if( action.direction == 'right') {
          i++;
        }

      }

    }

  }

  getAction(state, simbol) {
    //retorna ação a ser executada
    return state.actions.map((action) => {
        if(action.currentSimbol == simbol) {
          return action;
        }
    })
  }

  getState() {
    // retorna objeto do estado
    return this.actionTable.map( (state) => {
      if(this.currentState == state.stateSimbol) {
        return state;
      }
    });
  }

}
