import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {


  form: any = {
    list: [],
    searchParams: {},
    pageNo: 0
  }
  constructor(public router: Router, public httpService: HttpServiceService) {


  }
  ngOnInit(): void {
    this.search();
  }
  search() {
    var self = this
    this.httpService.post('http://localhost:8080/User/search/' + this.form.pageNo, this.form.searchParams, function (res: any) {
      console.log("res ==> ", res);
      self.form.list = res.result.data;
    })
  }



}
