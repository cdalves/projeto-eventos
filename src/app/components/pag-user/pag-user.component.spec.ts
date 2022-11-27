import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagUserComponent } from './pag-user.component';

describe('PagUserComponent', () => {
  let component: PagUserComponent;
  let fixture: ComponentFixture<PagUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
