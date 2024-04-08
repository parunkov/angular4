import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  form: FormGroup
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      address: new FormGroup({
        country: new FormControl('by'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    })
  }
  submit() {
    if (this.form.valid) {
      console.log('Form: ', this.form)
      const formData = { ...this.form.value }
      console.log('formData', formData)
    }
  }

  setCapital() {
    const cityMap: {[index: string]:string}  = {
      ru: 'Москва',
      ua: 'Киев',
      by: 'Минск'
    };
    const cityKey = this.form.get('address')?.get('country')?.value;
    const city: string = cityMap[cityKey];
    this.form.patchValue({address: {city}});
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    // (<FormArray>this.form.get('skills')).push(control);
    (this.form.get('skills') as FormArray).push(control);
  }

  getControls() {
    return (this.form.get('skills') as FormArray).controls;
  }
}
