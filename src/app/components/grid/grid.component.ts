import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movies, Result } from 'src/app/models/movies.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  animations: [
    trigger('fadeInOutScale', [
      state('void', style({ opacity: 0, transform: 'scale(0.5)' })),
      transition('void <=>*', animate(2000)),
    ]),
  ],
})
export class GridComponent {
  @Input() results!: Result[];
  @Output() detail = new EventEmitter<string>();
  displayedColumns: string[] = ['movieId', 'title', 'image'];

  emite(id: string) {
    this.detail.emit(id);
  }
}
