import { Component, output } from '@angular/core';

@Component({
  selector: 'app-data-forms',
  standalone: true,
  templateUrl: './data-forms.html',
  styleUrl: './data-forms.scss',
})
export class DataForms {
  data = 'helloW';
  dataChange = output<string>();

  onKey(event: any): void {
    this.data = event.target.value;
    // Emit the data change to parent component
    this.dataChange.emit(this.data);
  }
}
