import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from 'src/app/models/image.interface';
import { ImagesService } from 'src/app/services/images.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  image!: Image ;
  texto="Show all details";
  
  constructor(
    private imagesService: ImagesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('identifier--->', identifier);

    if (identifier != null)
      this.imagesService.getImageById(identifier).subscribe((image) => {
        if (!image) {
          return this.router.navigateByUrl('/');
        }
        this.image = image;
        return this.image;
      });
  }
}
