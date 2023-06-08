import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';
import {Image} from 'src/app/models/image.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  images: Image[]=[];

  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.imagesService.getAllImages().subscribe((images)=>this.images=images);
  }
}