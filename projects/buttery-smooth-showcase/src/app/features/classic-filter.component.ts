import {Component, inject, Input, SimpleChanges} from "@angular/core";

import {TvShowService} from "../tv-shows.service";
import {TvShowCardComponent} from "../shared/tv-show-card.component";

@Component({
  standalone: true,
  selector: 'app-classic-filter',
  template: `
    <div class="container">
      <h1>Classic filter</h1>
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
export class AppClassicFilterComponent {
  private tvShowService = inject(TvShowService);

  @Input() filterTerm: string = '';

  tvShows = [...this.tvShowService.tvShows];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filterTerm']) {
      this.tvShows = this.tvShowService.tvShows
        .filter(tvShow => tvShow.title.toLowerCase().includes(this.filterTerm.toLowerCase()));
    }
  }
}
