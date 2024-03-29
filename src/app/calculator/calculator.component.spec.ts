import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate sums correctly', () => {

    component.calculatorForm.get('firstInput').setValue(String(10));
    component.calculatorForm.get('secondInput').setValue(String(2));
    component.calculatorForm.get('operator').setValue('+');
    component.onSubmit();

    expect(component.result).toBe(12);

  });

  it('should calculate subtractions correctly', () => {

    component.calculatorForm.get('firstInput').setValue(String(10));
    component.calculatorForm.get('secondInput').setValue(String(2));
    component.calculatorForm.get('operator').setValue('-');
    component.onSubmit();

    expect(component.result).toBe(8);

  });

  it('should calculate divisions correctly', () => {

    component.calculatorForm.get('firstInput').setValue(String(10));
    component.calculatorForm.get('secondInput').setValue(String(2));
    component.calculatorForm.get('operator').setValue('/');
    component.onSubmit();

    expect(component.result).toBe(5);

  });

  it('should calculate multiplications correctly', () => {

    component.calculatorForm.get('firstInput').setValue(String(10));
    component.calculatorForm.get('secondInput').setValue(String(2));
    component.calculatorForm.get('operator').setValue('*');
    component.onSubmit();

    expect(component.result).toBe(20);

  });

  it('should clear the form', () => {

    component.calculatorForm.get('firstInput').setValue(String(10));
    component.calculatorForm.get('secondInput').setValue(String(2));
    component.calculatorForm.get('operator').setValue('+');
    component.onClear();

    expect(component.calculatorForm.get('firstInput').value).toBeNull();
    expect(component.calculatorForm.get('secondInput').value).toBeNull();
    expect(component.calculatorForm.get('operator').value).toBe('');

  });
});
