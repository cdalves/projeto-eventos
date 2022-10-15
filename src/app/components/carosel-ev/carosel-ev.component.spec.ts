import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaroselEvComponent } from './carosel-ev.component';

describe('CaroselEvComponent', () => {
  let component: CaroselEvComponent;
  let fixture: ComponentFixture<CaroselEvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaroselEvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaroselEvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
