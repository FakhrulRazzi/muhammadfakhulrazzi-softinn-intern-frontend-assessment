import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BmiService {
  constructor(private http: HttpClient) {}

  calculateBMI(weight: number, heightCm: number): number {
    const h = heightCm / 100;
    return weight / (h * h);
  }

  getCategory(bmi: number): string {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  }

  logBMI(data: any): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', data);
  }
}
