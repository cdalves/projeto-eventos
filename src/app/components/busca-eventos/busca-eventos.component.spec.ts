import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaEventosComponent } from './busca-eventos.component';

describe('BuscaEventosComponent', () => {
  let component: BuscaEventosComponent;
  let fixture: ComponentFixture<BuscaEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaEventosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
