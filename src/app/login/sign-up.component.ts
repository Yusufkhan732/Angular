import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private httpService: HttpServiceService) { }

  endpoint: string = 'http://localhost:8080/Auth/signup'

  form: any = {
    data: {},
    message: ''
  }

  signUp() {
    console.log('in signUp() function')
    console.log('firstName==> ', this.form.data.firstName)
    console.log('lastName===>', this.form.data.lastName)
    console.log('login===>', this.form.data.loginId)
    console.log('password===>', this.form.data.password)
    console.log('dob===>', this.form.data.dob)

    this.httpService.post(this.endpoint, this.form.data, function (res: any) {
      console.log('response from signUp api===>', res)
    })

  }
}