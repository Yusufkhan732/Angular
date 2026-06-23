import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartuplistComponent } from './startuplist.component';

describe('StartuplistComponent', () => {
  let component: StartuplistComponent;
  let fixture: ComponentFixture<StartuplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartuplistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartuplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
