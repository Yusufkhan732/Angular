import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user.component.css']
})
export class UserListComponent extends BaseListCtl {
  constructor(locator: ServiceLocatorService, route: ActivatedRoute) {

    super(locator.endpoints.USER, locator, route);
  }
}