import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-book-filter-bar',
  styleUrl: './book-filter-bar.component.scss',
  templateUrl: './book-filter-bar.component.html',
})
export class BookFilterBar {

  selectedCategory: string = '';
  searchTitle: string = '';


  @Output() filtersApplied: EventEmitter<{selectedCategory: string; searchTitle: string }> = new EventEmitter<{selectedCategory: string; searchTitle: string }>();


  ngSubmit() {
    this.filtersApplied.emit({ selectedCategory: this.selectedCategory, searchTitle: this.searchTitle });
  }

  clearSearch() {
    this.selectedCategory = '';
    this.searchTitle = '';
    this.filtersApplied.emit({ selectedCategory: this.selectedCategory, searchTitle: this.searchTitle });
  }
}
