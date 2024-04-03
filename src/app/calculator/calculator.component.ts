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
  historyArray: any[] = [];
  show: boolean = false;
  displayExpression: any;
  displayValue: any;
  //
  waitForSecondNumber = false;
  firstOperand: any = null;

  getNumber(num: any) {
    if (this.waitForSecondNumber) {
      this.inputValue = num;
      this.waitForSecondNumber = false;
    } else {
      this.inputValue === '0'
        ? (this.inputValue = num)
        : (this.inputValue += num);
    }
  }

  valueDot() {
    this.inputValue = '.';
  }

  getOperator(operator: any) {
    if (this.firstOperand === null) {
      this.firstOperand = Number(this.inputValue);
      this.displayValue = Number(this.inputValue);
      console.log('displayValue', this.displayValue);

      this.displayExpression = this.inputValue + ' ' + operator;
    } else if (this.operator) {
      console.log('this.inputValue', this.inputValue);

      let result = this.evaluate(this.operator, Number(this.inputValue));
      if (operator == '=') {
        console.log('displayValue-else-if', this.displayValue);
        this.displayExpression =
          this.displayValue + ' ' + this.operator + ' ' + this.inputValue;
        this.inputValue = String(result);
      } else {
        this.displayExpression = result + ' ' + operator;
        this.inputValue = 0;
      }
      this.inputValue = String(result);
      // this.firstOperand = result;
    }
    this.operator = operator;
    this.waitForSecondNumber = true;
  }

  evaluate(operator: any, secondOp: any) {
    switch (operator) {
      case '+':
        console.log('hiii');

        return (this.firstOperand += secondOp);
      case '-':
        console.log('hello');
        return (this.firstOperand -= secondOp);
      case '*':
        return (this.firstOperand *= secondOp);
      case '/':
        return (this.firstOperand /= secondOp);
      case '=':
        return secondOp;
    }
    // this.historyArray.push({
    //   first: a,
    //   second: b,
    //   ope: this.operator,
    //   res: this.result,
    // });
  }

  clearAll() {
    this.inputValue = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }

  // backBtnClicked() {
  //   if (this.result == 0) {
  //     this.inputValue = this.inputValue.slice(0, this.inputValue.length - 1);
  //   } else {
  //     this.firstValue = '';
  //     this.operator = '';
  //     this.tempValue = '';
  //   }
  // }

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
