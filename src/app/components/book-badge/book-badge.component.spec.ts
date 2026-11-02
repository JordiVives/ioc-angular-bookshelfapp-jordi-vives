import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookBadge } from './book-badge.component';

describe('BookBadge', () => {
  let component: BookBadge;
  let fixture: ComponentFixture<BookBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookBadge],
    }).compileComponents();

    fixture = TestBed.createComponent(BookBadge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
