import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { MotionDirective } from './motion.directive';

@NgModule({
  declarations: [AppComponent, CalculatorComponent, MotionDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
