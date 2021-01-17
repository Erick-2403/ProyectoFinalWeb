import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumencompraComponent } from './resumencompra.component';

describe('ResumencompraComponent', () => {
  let component: ResumencompraComponent;
  let fixture: ComponentFixture<ResumencompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumencompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumencompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
