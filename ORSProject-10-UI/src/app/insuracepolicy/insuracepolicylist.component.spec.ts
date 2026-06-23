import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuracepolicylistComponent } from './insuracepolicylist.component';

describe('InsuracepolicylistComponent', () => {
  let component: InsuracepolicylistComponent;
  let fixture: ComponentFixture<InsuracepolicylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuracepolicylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuracepolicylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
