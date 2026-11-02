import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../models/book';
import { BookBadge } from '../book-badge/book-badge.component';

@Component({
  imports: [BookBadge],
  selector: 'app-book-card',
  styleUrl: './book-card.component.scss',
  templateUrl: './book-card.component.html',
})
export class BookCard {
  @Input({required: true}) book!: Book;
  @Output() bookSelected = new EventEmitter<Book>();

  selectBook() {
     this.bookSelected.emit(this.book);
  }
}


  