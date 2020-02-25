import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartCityListComponent } from './smart-city-list.component';

describe('SmartCityListComponent', () => {
  let component: SmartCityListComponent;
  let fixture: ComponentFixture<SmartCityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartCityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartCityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
