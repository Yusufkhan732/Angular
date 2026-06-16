import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandmodelComponent } from './commandmodel.component';

describe('CommandmodelComponent', () => {
  let component: CommandmodelComponent;
  let fixture: ComponentFixture<CommandmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandmodelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
