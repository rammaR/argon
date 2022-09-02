import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramiteCadastroComponent } from './tramite-cadastro.component';

describe('TramiteCadastroComponent', () => {
  let component: TramiteCadastroComponent;
  let fixture: ComponentFixture<TramiteCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TramiteCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TramiteCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
