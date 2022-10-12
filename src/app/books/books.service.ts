import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
   constructor() { }
   getBooks(){ 
    return[
      {
        name:"Clean Code",
        author:"Robert C. Martin",
        image:"https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",
        price:700,
      },
      {
       name:"The Pragmatic Programmer",
       author:"David Thomas",
       image:"https://m.media-amazon.com/images/I/51A8l+FxFNL.jpg",
       price:800,
     },
      {
       name:"Fundamentals of Software Architecture",
       author:"Mark Richards",
       image:"https://m.media-amazon.com/images/I/51d0yhmnXQL.jpg",
       price:500,
     },
      {
       name:"The Kubernetes Book",
       author:"Nigel Poulton",
       image:"https://m.media-amazon.com/images/I/41sovme3JIL.jpg",
       price:1500,
     },
      {
       name:"The DevOps Handbook",
       author:"Mark Richards",
       image:"https://m.media-amazon.com/images/I/51-LRjBPDxL.jpg",
       price:2500,
     },
      {
       name:"Designing Data-Intensive Applications",
       author:"Martin Kleppmann ",
       image:"https://m.media-amazon.com/images/I/512ESwpmobL.jpg",
       price:800,
     },
      {
       name:"Advanced Algorithms and Data Structures",
       author:"Marcello La Rocca",
       image:"https://m.media-amazon.com/images/I/51Un63UGtHL.jpg",
       price:1100,
     },
      {
       name:"Machine Learning: Guide to Deep Learning, Python",
       author:"Artus Duval",
       image:"https://m.media-amazon.com/images/I/413fPV7f2pL.jpg",
       price:1200,
     }
    ]
   }
}
