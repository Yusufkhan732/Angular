import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jasper',
  templateUrl: './jasper.component.html',
  styleUrls: ['./jasper.component.css']
})
export class JasperComponent extends BaseCtl {


  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.JASPER, locator, route);

  }

  override ngOnInit(): void {
    this.generateReport();
  }
}
