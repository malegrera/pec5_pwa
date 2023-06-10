import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from 'src/app/models/image.interface';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  images: Image[] = [];
  loading: boolean = true;
  valor = 'cards';
  constructor(private imagesService: ImagesService, private router: Router) {}

  ngOnInit(): void {
    this.loading = true;
    this.imagesService.getAllImages().subscribe({
      next: (images) => (this.images = images),
      error: (error) => console.log(error),
      complete: () =>
        setTimeout(() => {
          this.loading = false;
        }, 500),
    });
  }

  detail(img: string) {
    this.router.navigateByUrl(`detail/${img}`);
  }
}
