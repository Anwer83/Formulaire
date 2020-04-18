import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ionicForm: FormGroup;
  isSubmitted = false;
  constructor(public formBuilder: FormBuilder) {}
ngOnInit(){

  this.ionicForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$'),Validators.minLength(8)]]
  })


}
get errorControl() {
  return this.ionicForm.controls;
}
submitForm() {
  this.isSubmitted=true;
}

}
