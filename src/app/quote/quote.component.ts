import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote = [
    new Quote(1, 'ignorance is bliss', 'treasure it',new Date(2018,1,20)),
  ]
  toogleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
}
completeQuote(isComplete,index){
  if (isComplete){
    this.quote.splice(index,1);
    }
}
  constructor() { }

  ngOnInit() {
  }

}
