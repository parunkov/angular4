import { Component, Provider, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SwitchComponent),
  multi: true
}

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [],
  providers: [VALUE_ACCESSOR],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss'
})
export class SwitchComponent implements ControlValueAccessor {
  state = 'off'

  private onChange = (value: any) => {}

  setState(state: string) {
    this.state = state
    this.onChange(this.state)
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    
  }

  setDisabledState(isDisabled: boolean): void {
    
  }

  writeValue(state: string): void {
    this.state = state
  }
}
