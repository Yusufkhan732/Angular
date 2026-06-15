import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from "../http-service.service";
import { BaseCtl } from '../base.component';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-getmarksheet',
  templateUrl: './getmarksheet.component.html',
  styleUrls: ['./marksheet.component.css']
})

export class GetmarksheetComponent extends BaseCtl {


  constructor(public locator: ServiceLocatorService, route: ActivatedRoute, private httpService: HttpServiceService) {
    super(locator.endpoints.MARKSHEET, locator, route);

  }
  go() {

    var _self = this;

    console.log(this.form.data.rollNo);

    // old data clear
    this.form.list = {};
   
    this.httpService.get("http://localhost:8080/Marksheet/rollno/" + this.form.data.rollNo, function (res: any) {

      if (res.success) {

        _self.form.list = res.result.data;
        _self.form.error = false;

      } else {
        _self.form.error = true;
        _self.form.message = res.result.message;

      }

      console.log("FORM", _self.form);

    });

  }
}