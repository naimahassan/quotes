import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote = [
    new Quote(1, 'ignorance is bliss', 'treasure it'),
  ]
  toogleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
}

  constructor() { }

  ngOnInit() {
  }

}
