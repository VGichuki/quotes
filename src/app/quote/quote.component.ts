import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
      new Quote('Elon Musk', 'When something is important enough, you do it even if the odds are not in your favor.', 'Vivian' ,new Date()),
      new Quote('Elon Musk', "Patience is a virtue, and I'm learning patience.It's a tough lesson.", 'Wangari', new Date())
  ];
  addNewQuote(quote: any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  deleteGoal(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].author}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  toggleDetails(index:number){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
