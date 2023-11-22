import {Component, inject, Input, OnChanges, SimpleChanges} from "@angular/core";

import {TvShowService} from "../tv-shows.service";
import {TvShowCardComponent} from "../shared/tv-show-card.component";
import {ButterySmooth} from "../../../../buttery-smooth/src/public-api";

@Component({
  standalone: true,
  selector: 'app-smooth-like-butter',
  template: `
      <div class="container">
          <h1>Smooth like butter</h1>
          <div class="temp-grid">
              <app-tv-show-card style="view-transition-name: item-{{i}}"
                                [tvShow]="tvShow" *butterySmooth="let tvShow of tvShows; let i = index"/>
          </div>
      </div>
  `,
  styles: [`
    .temp-grid {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4,1fr);
    }

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
  imports: [TvShowCardComponent, ButterySmooth]
})
export class SmoothLikeButterComponent implements OnChanges {

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
