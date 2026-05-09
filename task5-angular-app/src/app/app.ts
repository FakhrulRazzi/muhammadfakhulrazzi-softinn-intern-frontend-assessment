import { Component, signal } from '@angular/core';
import { BmiComponent } from './bmi/bmi';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BmiComponent],
  template: `<app-bmi></app-bmi>`
})
export class App {}
