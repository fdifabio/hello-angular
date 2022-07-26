import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  @Output()
  clicked: EventEmitter<boolean> = new EventEmitter();

  open = false;

  constructor() { }

  ngOnInit(): void {
  }

  clickButton() {
    this.open = !this.open;
    this.clicked.emit(this.open);
  }

}
