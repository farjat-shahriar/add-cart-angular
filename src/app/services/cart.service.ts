import { Injectable } from '@angular/core';
import { Book } from '../type/data';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor() { }
  cart:Book[] =[];

  add(book:Book){
    console.log(book)
  this.cart.push (book);
  }
  remove(book:Book){
    this.cart = this.cart.filter(b=>b != book)
  }
  get(){
    return this.cart;
  }
}
