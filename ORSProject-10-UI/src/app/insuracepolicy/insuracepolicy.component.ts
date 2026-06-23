import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insuracepolicy',
  templateUrl: './insuracepolicy.component.html',
  styleUrls: ['./insuracepolicy.component.css']
})
export class InsuracepolicyComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {

    super(locator.endpoints.INCURANCEPOLICY, locator, route)


  }

}
