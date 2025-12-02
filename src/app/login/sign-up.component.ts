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
    message: '',
    inputerror: {}
  }

  signUp() {

    var self = this
    // console.log('in signUp() function')
    // console.log('firstName==> ', this.form.data.firstName)
    // console.log('lastName===>', this.form.data.lastName)
    // console.log('login===>', this.form.data.loginId)
    // console.log('password===>', this.form.data.password)
    // console.log('dob===>', this.form.data.dob)

    this.httpService.post(this.endpoint, this.form.data, function (res: any) {
      console.log('message==:', res.result.message)
      console.log('inputerror==:', res.result.inputerror)
      console.log('id===>', res.result.data)
      console.log('status===>', res.success)

      if (res.result.message) {
        self.form.message = res.result.message

      }

      if (res.result.inputerror) {
        self.form.inputerror = res.result.inputerror

      }
    })

  }
}