import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  inputValue: any = '0';
  operator: any = '';
  firstValue: any = '';
  tempValue: any = '';
  result: any = 0;

  getNumber(num: any) {
    if (this.inputValue === '0') {
      this.inputValue = num;
    } else {
      this.inputValue = this.inputValue + num;
    }
    // if (this.inputValue != null) {
    //   this.inputValue === '0'
    //     ? (this.inputValue = num)
    //     : (this.inputValue = this.inputValue + num);
    // } else {
    //   this.inputValue = num;
    // }
  }

  valueDot() {
    this.inputValue = '.';
  }

  getOperator(operator: any) {
    console.log(this.inputValue, 'this.inputValue');
    this.tempValue = '';

    this.firstValue = parseFloat(this.inputValue);

    this.operator = operator;
    this.inputValue = '';
    // console.log('op', this.operator);

    // if (this.inputValue != null) {
    //   this.inputValue = this.inputValue + operator;
    // }
  }

  evaluate() {
    this.tempValue = this.inputValue;
    console.log(this.inputValue, 'op');
    const a = this.firstValue;
    const b = parseFloat(this.inputValue);
    this.result;
    if (this.operator == '+') {
      this.result = a + b;
    }
    if (this.operator == '*') {
      this.result = a * b;
    }
    if (this.operator == '-') {
      this.result = a - b;
    }
    if (this.operator == '/') {
      this.result = a / b;
    }
    // this.firstValue = result;
    this.inputValue = this.result.toString();

    console.log('a', a, 'b', b);
  }

  clearAll() {
    this.tempValue = '';
    this.firstValue = '';
    this.inputValue = '0';
    this.operator = '';
  }

  backBtnClicked() {
    console.log('this.tempValue', this.tempValue);
    if (this.result == 0) {
      this.inputValue = this.inputValue.slice(0, this.inputValue.length - 1);
      console.log('input', this.inputValue);
    }
  }
}
