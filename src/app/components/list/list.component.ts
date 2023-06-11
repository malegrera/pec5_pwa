import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movies,Result } from 'src/app/models/movies.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  movies!: Movies;
  loading: boolean = true;
  valor = 'cards';
  constructor(private MoviesService: MoviesService, private router: Router) {}

  ngOnInit(): void {
    this.loading = true;
    this.MoviesService.getAllMovies().subscribe({
      next: (movies) => this.movies=movies,
      error: (error) => console.log(error),
      complete: () =>
        setTimeout(() => {
          this.loading = false;
        }, 500),
    });
  }

  detail(id: string) {
    this.router.navigateByUrl(`detail/${id}`);
  }
}
