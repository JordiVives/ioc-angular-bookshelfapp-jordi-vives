import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Book } from './models/book';
import { BOOKS } from './data/books_mock';
import { BookList } from './components/book-list/book-list.component';
import { BookFilterBar } from './components/book-filter-bar/book-filter-bar.component';

@Component({
  imports: [RouterOutlet, BookList, BookFilterBar],
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})

export class App {
filterBooks($event: Event) {
throw new Error('Method not implemented.');
}
  protected readonly title = signal('ioc-angular-bookshelfapp-jordi-vives');
  public appName: string = "BookShelfApp";
  
  books: Book[] = BOOKS;
}


