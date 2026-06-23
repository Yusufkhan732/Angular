import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuracepolicyComponent } from './insuracepolicy.component';

describe('InsuracepolicyComponent', () => {
  let component: InsuracepolicyComponent;
  let fixture: ComponentFixture<InsuracepolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuracepolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuracepolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
