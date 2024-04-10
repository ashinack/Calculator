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
  operatorCall = false;
  result: any;
  //
  waitForSecondNumber = false;
  firstOperand: any = null;
  displayFirstop: any;

  getNumber(num: any) {
    if (this.waitForSecondNumber) {
      this.displayValue = num;
      this.inputValue = num;
      this.waitForSecondNumber = false;
    } else {
      this.inputValue === '0'
        ? (this.inputValue = num)
        : (this.inputValue += num);
      this.inputValue === '0'
        ? (this.displayValue = num)
        : (this.displayValue += num);
    }
  }

  valueDot() {
    this.inputValue = '.';
  }

  getOperator(operator: any) {
    if (this.firstOperand === null) {
      this.firstOperand = Number(this.inputValue);
      this.displayFirstop = Number(this.inputValue);

      this.displayExpression = this.inputValue + ' ' + operator;
    } else if (this.operator) {
      if (this.waitForSecondNumber == true) {
        this.displayFirstop = Number(this.inputValue);
      }

      if (this.waitForSecondNumber == false) {
        // this.displayExpression =
        //   this.firstOperand + ' ' + this.operator + ' ' + this.inputValue;
        this.historyArray.push({
          first: this.firstOperand,
          ope: this.operator,
          second: this.inputValue,
        });
        this.result = this.evaluate(this.operator, Number(this.inputValue));
        const lastItemIndex = this.historyArray.length - 1;
        const lastItem = this.historyArray[lastItemIndex];
        lastItem.res = this.result;
      }
      if (operator == '=') {
        this.displayExpression =
          this.displayFirstop + ' ' + this.operator + ' ' + this.displayValue;
      } else {
        this.displayExpression = this.result + ' ' + operator;
      }

      this.inputValue = String(this.result);
    }
    this.operator = operator;
    this.waitForSecondNumber = true;
    console.log(this.historyArray, 'jjj');
  }

  evaluate(operator: any, secondOp: any) {
    switch (operator) {
      case '+':
        return (this.firstOperand += secondOp);
      case '-':
        return (this.firstOperand -= secondOp);
      case '*':
        return (this.firstOperand *= secondOp);
      case '/':
        return (this.firstOperand /= secondOp);
      case '=':
        return secondOp;
    }
  }

  clearAll() {
    this.inputValue = '0';
    this.firstOperand = null;
    this.operator = null;
    this.displayExpression = null;
    this.waitForSecondNumber = false;
  }

  backBtnClicked() {
    if (this.operator != '=') {
      this.inputValue = this.inputValue.slice(0, this.inputValue.length - 1);
    } else {
      this.displayExpression = null;
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
