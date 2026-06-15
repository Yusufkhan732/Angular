
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpServiceService } from '../http-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';
import { BaseCtl } from '../base.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent extends BaseCtl {

  selected = null;
  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.COURSE, locator, route);
  }
  
}

