import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookFilterBar } from './book-filter-bar.component';

describe('BookFilterBar', () => {
  let component: BookFilterBar;
  let fixture: ComponentFixture<BookFilterBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookFilterBar],
    }).compileComponents();

    fixture = TestBed.createComponent(BookFilterBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
