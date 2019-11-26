import { Component } from '@angular/core';
import { MachineActions } from './turing-machine/helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'maquina-de-turing';
  // actions = [new MachineActions];
  actions = [
    {
      state: '->',
      entrySimbol: 'x',
      nextSate: '0',
      writeSimbol: '_',
      direction: 'D',
    },
    {
      state: '0',
      entrySimbol: 'x',
      nextSate: '0',
      writeSimbol: '_',
      direction: 'E',
    },
    {
      state: '0',
      entrySimbol: '_',
      nextSate: '0',
      writeSimbol: '_',
      direction: 'PARA',
    },
  ];
}
