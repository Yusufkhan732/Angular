import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-commandmodel',
  templateUrl: './commandmodel.component.html',
  styleUrls: ['./commandmodel.component.css']
})
export class CommandmodelComponent extends BaseCtl {

  constructor(public locatotr: ServiceLocatorService, route: ActivatedRoute) {

    super(locatotr.endpoints.COMMANDMODEL, locatotr, route)
  }


}
