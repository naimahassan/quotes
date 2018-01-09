import { Component } from '@angular/core';
import {Quote} from './quote'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quote = [
    new Quote(1, 'ignorance is bliss', 'treasure it',new Date(2018,1,9)),
  ]
}
