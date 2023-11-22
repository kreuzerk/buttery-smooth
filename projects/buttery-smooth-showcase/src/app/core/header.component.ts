import {Component} from "@angular/core";
import exp from "constants";

@Component({
  standalone: true,
  selector: 'app-header',
  template: `
    <div>
      <h1>Buttery smooth showcase</h1>
    </div>
  `,
  styles: [`
    div {
      display: flex;
      align-items: center;

      background: #1c202e;

      height: 80px;
      padding-left: 20px;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    }
  `]
})
export class AppHeaderComponent {
}
