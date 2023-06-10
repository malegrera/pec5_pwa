import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  animate, state, style, transition, trigger,
} from '@angular/animations'
import { Image } from 'src/app/models/image.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  animations: [
    trigger('fadeInOutScale', [
      state('void', style({opacity: 0, transform: 'scale(0.5)'})), 
      transition('void <=>*', animate(2000))
    ])
  ]
})
export class GridComponent {
  @Input() images!: Image[];
  @Output() detail=new EventEmitter<string>();
  displayedColumns: string[] = ['imageId', 'author','image'];

  emite(imgId:string) {
    this.detail.emit(imgId);
  }

}
