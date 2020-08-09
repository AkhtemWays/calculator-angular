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
      case 'ln':
        this.helper2(action);
        break;
      case 'exp':
        this.helper2(action);
        break;
      case 'fac':
        this.helper2(action);
        break;
      case 'sqrt':
        this.helper2(action);
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
  private helper2(action: string): void {
    switch (action) {
      case 'ln':
        if (
          !this.currentSign &&
          !this.currentValue &&
          Number.parseFloat(this.value) > 0
        ) {
          this.value = Math.log(Number.parseFloat(this.value)).toString();
        } else if (Number.parseFloat(this.value) <= 0) {
          alert('Функция не определенна в этой точке');
          return;
        }
        break;
      case 'exp':
        if (!this.currentSign && !this.currentValue) {
          this.value = Math.exp(Number.parseFloat(this.value)).toString();
        }
        break;
      case 'sqrt':
        if (
          !this.currentSign &&
          !this.currentValue &&
          Number.parseFloat(this.value) >= 0
        ) {
          this.value = Math.sqrt(Number.parseFloat(this.value)).toString();
        } else if (Number.parseFloat(this.value) < 0) {
          alert('Функция не определенна в этой точке');
          return;
        }
        break;
      case 'fac':
        if (
          !this.currentSign &&
          !this.currentValue &&
          Number.parseFloat(this.value) >= 0 &&
          Number.parseInt(this.value) === Number.parseFloat(this.value)
        ) {
          this.value = this.factorial(Number.parseInt(this.value)).toString();
        } else if (
          Number.parseFloat(this.value) < 0 &&
          Number.parseInt(this.value) !== Number.parseFloat(this.value)
        ) {
          alert(
            'Функция не определенна в этой точке и применяется только на целые числа'
          );
          return;
        } else if (Number.parseFloat(this.value) < 0) {
          alert('Функция не определенна в этой точке');
          return;
        } else if (
          Number.parseInt(this.value) !== Number.parseFloat(this.value)
        ) {
          alert('Функция применяется только на целые числа');
          return;
        }
        break;
      default:
        return;
    }
  }
  private factorial(n: number) {
    let result: number = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result.toString();
  }
}
