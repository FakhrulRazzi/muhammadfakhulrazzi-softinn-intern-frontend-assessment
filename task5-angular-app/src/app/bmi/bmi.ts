import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { BmiService } from '../bmi';

@Component({
  selector: 'app-bmi',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './bmi.html',
  styleUrls: ['./bmi.css']
})
export class BmiComponent {
  result: number | null = null;
  category = '';

  form: any;

  constructor(
    private fb: FormBuilder,
    private bmiService: BmiService
  ) {
    this.form = this.fb.group({
      height: ['', [Validators.required, Validators.min(50), Validators.max(250)]],
      weight: ['', [Validators.required, Validators.min(10), Validators.max(300)]]
    });
  }

  calculate(){
    if (this.form.invalid) return;

    const height = this.form.value.height!;
    const weight = this.form.value.weight!;

    this.result = this.bmiService.calculateBMI(weight, height);
    this.category = this.bmiService.getCategory(this.result);

    this.bmiService.logBMI({height, weight, bmi: this.result}).subscribe();
  }
}
