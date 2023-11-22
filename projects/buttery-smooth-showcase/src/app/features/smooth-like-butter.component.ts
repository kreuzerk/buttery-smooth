import {Component, inject} from "@angular/core";

import {TvShowService} from "../tv-shows.service";
import {TvShowCardComponent} from "../shared/tv-show-card.component";

@Component({
  standalone: true,
  selector: 'app-smooth-like-butter',
  template: `
    <div class="container">
      <h1>Smooth like butter</h1>
      <div class="grid">
          @for(tvShow of tvShows; track tvShow.id){
          <app-tv-show-card [tvShow]="tvShow"/>
          }
      </div>
    </div>
  `,
  styles: [`
    .container {
      background: #212434;
      border-radius: 20px;
      padding: 20px;
      margin-top: 20px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
    }
  `],
  imports: [TvShowCardComponent]
})
export class SmoothLikeButterComponent {
  private tvShowService = inject(TvShowService);
  tvShows = [...this.tvShowService.tvShows];

  handleInputChange($event: any) {
    this.tvShows = this.tvShowService.tvShows
      .filter(tvShow => tvShow.title.toLowerCase().includes($event.target.value.toLowerCase()));
  }
}
