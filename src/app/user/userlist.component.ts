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
    pageNo: 0,
    deleteParams: [],
    message: '',
    preload: []
  }
  constructor(public router: Router, public httpService: HttpServiceService) {


  }
  ngOnInit(): void {
    this.search();
    this.preload()
  }

  preload() {
    var self = this
    this.httpService.get('http://localhost:8080/User/preload', function (res: any) {

      console.log('res==', res)
      self.form.preload = res.result.roleList
    })
  }
  previous() {
    this.form.pageNo--
    this.search()
  }
  next() {
    this.form.pageNo++;
    this.search();
  }
  onClickCheckBox(userId: any) {
    this.form.deleteParams = userId;
  }

  search() {
    var self = this
    this.httpService.post('http://localhost:8080/User/search/' + this.form.pageNo, this.form.searchParams, function (res: any) {
      console.log("res ==> ", res);
      self.form.list = res.result.data;

    })
  }

  delete() {
    var self = this
    this.httpService.get('http://localhost:8080/User/delete/' + this.form.deleteParams, function (res: any) {

      if (res.success) {
        self.form.message = res.result.message;
      }

      self.search()

    })
  }


}
