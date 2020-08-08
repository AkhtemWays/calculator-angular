import { Component } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  public value: any = '0';
  public currentValue: any = '';
  public currentSign: string;
  private initial: boolean = true;

  public setCurrentValue(val: string): void {
    if (val !== 'C') {
      if (this.initial) {
        this.value === '0' ? (this.value = val) : (this.value += val);
      } else if (
        !this.initial &&
        this.currentSign === '' &&
        this.currentValue === ''
      ) {
        return;
      } else {
        this.currentValue += val;
      }
    } else {
      if (this.initial) {
        if (this.value !== '0') {
          this.value.length === 1
            ? (this.value = '0')
            : (this.value = this.value
                .toString()
                .slice(0, this.value.length - 1));
        }
      }
      this.currentValue.length === 1
        ? (this.currentValue = '')
        : (this.currentValue = this.currentValue.slice(
            0,
            this.currentValue.length - 1
          ));
    }
  }
  public Evaluate(action: string): void {
    console.log(action);
    switch (action) {
      case '+':
        if (!this.currentSign) {
          this.currentSign = '+';
          this.initial = false;
        } else {
          this.helper(action);
        }
        break;
      case '-':
        if (!this.currentSign) {
          this.currentSign = '-';
          this.initial = false;
        } else {
          this.helper(action);
        }

        break;
      case '/':
        if (!this.currentSign) {
          this.currentSign = '/';
          this.initial = false;
        } else {
          this.helper(action);
        }
        break;
      case '*':
        if (!this.currentSign) {
          this.currentSign = '*';
          this.initial = false;
        } else {
          this.helper(action);
        }
        break;
      case '=':
        this.helper(action);
        break;

      case 'clear':
        this.value = '0';
        this.currentSign = '';
        this.currentValue = '';
        this.initial = true;
        break;
      default:
        return;
    }
  }
  private helper(action: string): void {
    if (action === this.currentSign && !this.currentValue) {
      return;
    }
    if (!this.currentValue && action === '=') {
      return;
    }
    if (
      action !== this.currentSign &&
      !this.currentValue &&
      this.value &&
      action !== '='
    ) {
      this.currentSign = action;
      return;
    }

    const currentValue: number = Number.parseFloat(this.currentValue);
    if (this.currentSign === '*') {
      this.value = Number.parseFloat(this.value) * currentValue;
      this.value = this.value.toString();
      this.currentValue = '';
      this.currentSign = action === '=' ? '' : action;
    } else if (this.currentSign === '-') {
      this.value = Number.parseFloat(this.value) - currentValue;
      this.value = this.value.toString();
      this.currentValue = '';
      this.currentSign = action === '=' ? '' : action;
    } else if (this.currentSign === '/') {
      this.value = Number.parseFloat(this.value) / currentValue;
      this.value = this.value.toString();
      this.currentValue = '';
      this.currentSign = action === '=' ? '' : action;
    } else if (this.currentSign === '+') {
      this.value = Number.parseFloat(this.value) + currentValue;
      this.value = this.value.toString();
      this.currentValue = '';
      this.currentSign = action === '=' ? '' : action;
    }
  }
}
