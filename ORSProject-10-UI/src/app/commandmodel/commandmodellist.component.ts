import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-commandmodellist',
  templateUrl: './commandmodellist.component.html',
  styleUrls: ['./commandmodellist.component.css']
})
export class CommandmodellistComponent extends BaseListCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.COMMANDMODEL, locator, route)

  }

}
