import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movies,Result } from 'src/app/models/movies.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  result!: Result;
  texto = 'Show all details';

  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');

    if (identifier != null)
      this.moviesService.getMovieById(identifier).subscribe((result) => {
        if (!result) {
          return this.router.navigateByUrl('/');
        }
        this.result = result;
        return this.result;
      });
  }
}
