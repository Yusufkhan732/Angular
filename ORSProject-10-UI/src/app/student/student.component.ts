import { Component, OnInit } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent extends BaseCtl {
  selected = null;
  constructor(public locator: ServiceLocatorService,  route: ActivatedRoute) {
    super(locator.endpoints.STUDENT, locator, route);
  }
}