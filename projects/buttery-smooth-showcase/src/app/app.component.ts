import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import {AppClassicFilterComponent} from "./features/classic-filter.component";
import {AppHeaderComponent} from "./core/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, AppClassicFilterComponent, AppHeaderComponent]
})
export class AppComponent {
  title = 'buttery-smooth-showcase';
}
