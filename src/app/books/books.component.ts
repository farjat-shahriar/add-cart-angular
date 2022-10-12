import { Component, OnInit } from '@angular/core';
import { Book } from '../type/data';
import { BooksService } from './books.service';
// interface Book{
//   name:string,
//   author:string,
//   image:string,
//   price:number,
// }

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  constructor(private booksService : BooksService) { 
      this.books = this.booksService.getBooks()
  }
 

 books:Book[]=[]
  
//  card:Book[]=[]

 isdisable:boolean=false;
 isShowing:boolean=true;

 togglebooks(){
  this.isShowing =! this.isShowing;
  
 }

//   handleclick(){
//  this.isdisable=! this.isdisable;
// }
//  my_name:string="";
// handleInput(event:any){
//   this.my_name = event.target.value;
//  console.log(event.target.value);
// }


  ngOnInit(): void {}
 
  // childInfo(book:Book){
  //   console.log(book);
  // }
}
