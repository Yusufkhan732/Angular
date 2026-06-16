import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandmodellistComponent } from './commandmodellist.component';

describe('CommandmodellistComponent', () => {
  let component: CommandmodellistComponent;
  let fixture: ComponentFixture<CommandmodellistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandmodellistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandmodellistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
