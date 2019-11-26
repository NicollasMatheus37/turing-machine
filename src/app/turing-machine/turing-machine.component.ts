import { Component, OnInit, Input } from '@angular/core';
import { MachineActions } from './helpers';

@Component({
	selector: 'app-turing-machine',
	templateUrl: './turing-machine.component.html',
	styleUrls: ['./turing-machine.component.css']
})
export class TuringMachineComponent implements OnInit {

	@Input() actions;
	symbolInputValue: string = null;
	stateInputValue: string = null;
	symbols = ['_', 'x'];
	states = ['->', '0'];
	directions = ['E', 'D', 'PARA'];

	constructor() { }

	ngOnInit() {
	}

	submitSymbol() {
		if (this.symbolInputValue) {
			if (!this.symbols.includes(this.symbolInputValue)) {
				this.symbols.push(this.symbolInputValue);
			}
		}
	}

	createState() {
		if (this.stateInputValue) {
			if (!this.states.includes(this.stateInputValue)) {
				this.states.push(this.stateInputValue);
				this.stateInputValue = null;
			}
		}
	}

	removeSymbol(i) {
		if (i != 0) this.symbols.splice(i, 1);
	}

	removeState(i) {
		if (i != 0) this.states.splice(i, 1);
	}

	createAction() {
		this.actions.push(new MachineActions);
	}

	removeAction(i) {
		if (i) this.actions.splice(i, 1);
	}

}
