import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  form: any = {
    data: {}
  }

  signUp() {

    console.log("in signUp function")
    console.log('firstName==>', this.form.data.firstName)
    console.log('lastName==>', this.form.data.lastName)
    console.log('login==>', this.form.data.login)
    console.log('password===>', this.form.data.password)
    console.log('dob===>', this.form.data.dob)


  }


}
