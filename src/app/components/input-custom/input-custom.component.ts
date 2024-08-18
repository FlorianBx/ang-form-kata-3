import { Component, input, output, computed } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-custom',
  standalone: true,
  imports: [],
  templateUrl: './input-custom.component.html',
  styleUrl: './input-custom.component.css'
})
export class InputCustomComponent {
  name = input<string>();
  type = input<string>('text');
  id = input<string>();
  placeholder = input<string>();
  valueChanged = output<string>(); // new EventEmitter<string>();

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.valueChanged.emit(inputElement.value);
  }
}
