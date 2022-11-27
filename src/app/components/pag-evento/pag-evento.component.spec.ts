import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagEventoComponent } from './pag-evento.component';

describe('PagEventoComponent', () => {
  let component: PagEventoComponent;
  let fixture: ComponentFixture<PagEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
