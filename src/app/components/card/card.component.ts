import { Component, Input } from '@angular/core';
import {
  animate, state, style, transition, trigger,
} from '@angular/animations'
import { Image } from 'src/app/models/image.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('fadeInOutScale', [
      state('void', style({opacity: 0, transform: 'scale(0.5)'})), 
      transition('void <=>*', animate(2000))
    ])
  ]
})
export class CardComponent {
  @Input() image!: Image;


}
