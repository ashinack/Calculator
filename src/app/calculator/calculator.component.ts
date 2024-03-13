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
  historyArray: any[] = [];
  show: boolean = false;

  getNumber(num: any) {
    console.log(this.result, 'res');

    if (this.inputValue === '0') {
      this.inputValue = num;
    } else if (this.result != 0 && this.inputValue == this.result) {
      console.log('heelo');

      this.inputValue = num;
      this.firstValue = '';
      this.tempValue = '';
      this.operator = '';
      this.result = 0;
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
    console.log(this.tempValue, 'this.tempValue');

    this.tempValue = '';

    this.firstValue = parseFloat(this.inputValue);
    console.log('opera', this.operator == '');
    if (this.operator != '') {
      console.log('kkk');

      this.evaluate();
    }

    this.operator = operator;

    this.inputValue = '';
    // console.log('op', this.operator);

    // if (this.inputValue != null) {
    //   this.inputValue = this.inputValue + operator;
    // }
  }

  evaluate() {
    console.log('inputvalue', this.inputValue);

    this.tempValue = this.inputValue;
    const a = this.firstValue;
    const b = parseFloat(this.inputValue);
    console.log('a', 'b', a, b);

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
    this.historyArray.push({
      first: a,
      second: b,
      ope: this.operator,
      res: this.result,
    });

    console.log(this.historyArray, 'this.historyArray');
  }

  clearAll() {
    this.tempValue = '';
    this.firstValue = '';
    this.inputValue = '0';
    this.operator = '';
  }

  backBtnClicked() {
    if (this.result == 0) {
      this.inputValue = this.inputValue.slice(0, this.inputValue.length - 1);
    } else {
      this.firstValue = '';
      this.operator = '';
      this.tempValue = '';
    }
  }

  historyDetails() {
    this.show = !this.show;
  }

  clearHistory() {
    this.historyArray = [];
  }

  cancelHistory() {
    this.show = !this.show;
  }
}
