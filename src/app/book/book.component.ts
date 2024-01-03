import { Component } from '@angular/core';
import { Book } from '../models/book.model';
import { v4 as uuid } from 'uuid';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  bookTitle: string = "";
  bookAuthor: string = "";
  bookStartDate: Date = new Date();

  books: Book[] = [];

  ngOnInit(): void {
    let savedBooks = localStorage.getItem("books");
    this.books = savedBooks ? JSON.parse(savedBooks) : [];
  }

  addBook(){
    if(this.bookTitle.trim().length && this.bookAuthor.trim().length){
      let newBook: Book = {
        id: uuid(),
        title: this.bookTitle,
        author: this.bookAuthor,
        date: this.bookStartDate
      }

      this.books.push(newBook);

      this.bookTitle = "";
      this.bookAuthor = "";
      this.bookStartDate = new Date();

      localStorage.setItem("books", JSON.stringify(this.books));
    }
  }

  deleteBook(index: number){
    this.books.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(this.books));
  }
}
