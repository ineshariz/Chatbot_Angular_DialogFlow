import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  @Input() appareilName: string;
  @Output() nombreRate = new EventEmitter();
  counter=0;
  constructor() { }

  ngOnInit() {
  }
  iLoveIt() {
    this.counter = this.counter + 1;
    this.nombreRate.emit(this.counter);
  }

}
