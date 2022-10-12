import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Book } from '../type/data';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book : Book={} as Book;
  isincart:boolean=false
  // @Output() Bookemitter = new EventEmitter<Book>();

  constructor(private Cartservice: CartService) {
 
   }

  ngOnInit(): void {
  }
  onClick(){
    this.isincart=true
    this.Cartservice.add(this.book);
    // this.Bookemitter.emit(this.book);
  }
  Remove(){
    this.isincart=false
    this.Cartservice.remove(this.book);
  }
}
