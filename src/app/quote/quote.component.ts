import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote = [
    new Quote(1, 'ignorance is bliss', 'treasure it',new Date(2018,1,8)),
  ]
  addNewquote(quote){
    let quoteLength = this.quote.length;
    quote.id=quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quote.push(quote)

}

  toogleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
}
deleteGoal(isComplete,index){
  if (isComplete){
      let toDelete=confirm(`Are you sure you want to delete ${this.quote[index].name}`)
      
      if(toDelete){
          this.quote.splice(index,1)
      }
  }
}
  constructor() { }

  ngOnInit() {
  }

}
