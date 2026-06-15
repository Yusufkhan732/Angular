import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent  extends BaseCtl {

  constructor(private locator: ServiceLocatorService,route:ActivatedRoute){

    super(locator.endpoints.TIMETABLE,locator,route)
  }

}
