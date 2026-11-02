import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-book-badge',
  styleUrl: './book-badge.component.scss',
  templateUrl: './book-badge.component.html',
})
export class BookBadge {
  @Input({required: true}) category: string = '';
}
