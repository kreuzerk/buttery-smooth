import {Component, inject} from "@angular/core";

import {TvShowService} from "../tv-shows.service";
import {TvShowCardComponent} from "../shared/tv-show-card.component";

@Component({
  standalone: true,
  selector: 'app-classic-filter',
  template: `
    <h1>Classic filter</h1>

    <input type="text" (input)="handleInputChange($event)"/>

    <div class="grid">
      @for(tvShow of tvShows; track tvShow.id){
      <app-tv-show-card [tvShow]="tvShow"/>
      }
    </div>
  `,
  styles: [`
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
    }
  `],
  imports: [TvShowCardComponent]
})
export class AppClassicFilterComponent {
  private tvShowService = inject(TvShowService);
  tvShows = [...this.tvShowService.tvShows];

  handleInputChange($event: any) {
    this.tvShows = this.tvShowService.tvShows
      .filter(tvShow => tvShow.title.toLowerCase().includes($event.target.value.toLowerCase()));
  }
}
