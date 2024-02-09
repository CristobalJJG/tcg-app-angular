import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardInfo } from 'src/app/models/info';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
  @Input() info!: CardInfo;
  @Output() event = new EventEmitter<CardInfo>();

  open = true;
  toggle() { this.open = !this.open; }

  sendToMain() { console.log(this.info); this.event.emit(this.info); }
}
