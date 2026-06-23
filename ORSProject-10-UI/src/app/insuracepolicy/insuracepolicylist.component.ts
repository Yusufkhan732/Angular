import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insuracepolicylist',
  templateUrl: './insuracepolicylist.component.html',
  styleUrls: ['./insuracepolicylist.component.css']
})
export class InsuracepolicylistComponent extends BaseListCtl {


  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {

    super(locator.endpoints.INCURANCEPOLICY, locator, route)


  }

}
