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
      new Quote('Elon Musk', "Patience is a virtue, and I'm learning patience.It's a tough lesson.", 'Vivian', new Date())
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
