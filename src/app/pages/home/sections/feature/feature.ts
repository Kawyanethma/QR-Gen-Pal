import { Component, input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { NgxFadeComponent } from '@omnedia/ngx-fade';


@Component({
  selector: 'app-feature',
  imports: [CardModule , NgxFadeComponent],
  templateUrl: './feature.html',
  styleUrl: './feature.scss',
})
export class Feature {
  icon = input.required({ alias: 'iconName' });
  title = input.required({ alias: 'titleText' });
  description = input.required({ alias: 'descriptionText' });
  transitionDuration = input<string>("0.3s", { alias: 'transitionDuration' });
  color = input.required({ alias: 'iconColor' });
}
