import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image.interface';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  images: Image[] = [];
  loading: boolean=true;
  displayedColumns: string[] = ['imageId', 'author'];
  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.loading=true;
    this.imagesService.getAllImages().subscribe({
      next: (images) => (this.images = images),
      error: (error) => console.log(error),
      complete: () =>
        setTimeout(() => {
          this.loading = false;
        }, 1000),
    });
  }
}
