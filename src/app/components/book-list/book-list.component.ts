import { Component, Input} from '@angular/core';
import { Book } from '../../models/book';
import { BookCard } from '../book-card/book-card.component';
import { BookFilterBar } from '../book-filter-bar/book-filter-bar.component';
import { DatePipe } from '@angular/common';

@Component({
  imports: [BookCard, BookFilterBar, DatePipe],
  selector: 'app-book-list',
  styleUrl: './book-list.component.scss',
  templateUrl: './book-list.component.html',
})
export class BookList {
  @Input({required: true}) books!: Book[];

  onBookSelected(book: Book) {
    console.log('Llibre seleccionat:', book);
    this.selectedBook = book;
  }
  
  selectedBook: Book | null = null;

  changeCategory(category: string) {
    console.log('Categoria seleccionada:', category);
  }

  selectedCategory: string = "";
  titleToSearch: string = "";

  categoryChanged(category: string) {
    this.selectedCategory = category;
    console.log('Categoria seleccionada:', category);
  }

  get filteredBooks(): Book[] {
    return this.books.filter(book => {
      const matchesCategory = this.selectedCategory ? book.category === this.selectedCategory : true;
      const matchesTitle = this.titleToSearch ? book.title.toLowerCase().includes(this.titleToSearch.toLowerCase()) : true;
      return matchesCategory && matchesTitle;
    });
  }

  applyFilters(filters: { selectedCategory: string; searchTitle: string }) {
    this.selectedCategory = filters.selectedCategory;
    this.titleToSearch = filters.searchTitle;
  }

  foundBooksCount(): number {
    return this.filteredBooks.length;
  }

  closeBookDetails() {
    this.selectedBook = null;
  }

}
