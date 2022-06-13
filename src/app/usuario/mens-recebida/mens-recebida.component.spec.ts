import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensRecebidaComponent } from './mens-recebida.component';

describe('MensRecebidaComponent', () => {
  let component: MensRecebidaComponent;
  let fixture: ComponentFixture<MensRecebidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensRecebidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensRecebidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
