import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  inputValue: any = '0';

  getNumber(num: any) {
    if (this.inputValue != null) {
      this.inputValue === '0'
        ? (this.inputValue = num)
        : (this.inputValue = this.inputValue + num);
    } else {
      this.inputValue = num;
    }
  }

  valueDot() {
    this.inputValue = '.';
  }

  getOperator(operator: any) {
    if (this.inputValue != null) {
      this.inputValue = this.inputValue + operator;
    }
  }
}
