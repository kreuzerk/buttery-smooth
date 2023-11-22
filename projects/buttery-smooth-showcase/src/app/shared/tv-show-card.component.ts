import {ChangeDetectionStrategy, Component, Input} from "@angular/core";

import {TvShow} from "../tv-shows.service";

@Component({
  standalone: true,
  selector: 'app-tv-show-card',
  template: `
    <div class="card">
      <img class="card-img" [src]="'assets/' + tvShow.imageSrc"/>
      <div class="card-body">
        <h2 class="card-title">{{tvShow.title}}</h2>
      </div>
    </div>
  `,
  styles: [`
    .card {
      background-color: #1e1e1e; /* Slightly lighter than the background */
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Soft shadow for depth */
      margin: 20px;
      overflow: hidden; /* Ensures the image and content fit nicely */
      cursor: pointer;
    }

    .card-img {
      width: 100%; /* Full width of the card */
      height: auto; /* Maintain aspect ratio */
    }

    .card-body {
      padding: 15px; /* Spacing inside the card */
    }

    .card-title {
      margin-top: 0;
      color: #e0e0e0; /* Slightly lighter than text for emphasis */
    }

    .card-text {
      color: #cccccc; /* A bit dimmer to differentiate from the title */
    }

    .card-link {
      color: #4a90e2; /* A bright color for links */
      text-decoration: none;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TvShowCardComponent {
  @Input({required: true}) tvShow!: TvShow;
}
