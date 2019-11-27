import { Component, OnInit } from '@angular/core';
import { MachineActions, SubtractionExample, MultiplicationExample } from '../turing-machine/helpers';
import { Location } from '@angular/common';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	onHome: boolean = true;
	creatingOwnMachine: boolean = false;
	running: boolean = false;
	example: boolean = false;
	actions = [new MachineActions];
	states = [];
	symbols = [];

	constructor(private location: Location) { }

	ngOnInit() { }

	goHome() {
		this.onHome = true;
		this.creatingOwnMachine = false;
		this.running = false;
		this.example = false;
	}

	run() {
		this.onHome = false;
		this.creatingOwnMachine = false;
		this.running = true;
		this.example = false;
	}

	createOwn() {
		this.onHome = false;
		this.creatingOwnMachine = true;
		this.running = false;
		this.example = false;
	}

	useExample() {
		this.onHome = false;
		this.creatingOwnMachine = false;
		this.running = false;
		this.example = true;
	}

	setSubtraction() {
		this.actions = new SubtractionExample().actions;
		this.symbols = new SubtractionExample().symbols;
		this.states = new SubtractionExample().states;
		this.createOwn();
	}

	setMultiplication() {
		this.actions = new MultiplicationExample().actions;
		this.symbols = new MultiplicationExample().symbols;
		this.states = new MultiplicationExample().states;
		this.createOwn();
	}
}
