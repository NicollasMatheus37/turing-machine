import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() hasRun: boolean = true;
  @Output() home: EventEmitter<any> = new EventEmitter();
  @Output() run: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  runMachine() {
    this.run.emit('run');
  }

  toHome() {
    this.home.emit('home');
  }

}
