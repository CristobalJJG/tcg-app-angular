import { Component } from '@angular/core';
import { CardInfo } from 'src/app/models/info';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {

    name: "",
  }

  open = true;
  toggle() { this.open = !this.open; }

}
