import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialpedidosComponent } from './historialpedidos.component';

describe('HistorialpedidosComponent', () => {
  let component: HistorialpedidosComponent;
  let fixture: ComponentFixture<HistorialpedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialpedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialpedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
