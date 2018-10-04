import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptocoinsComponent } from './cryptocoins.component';

describe('CryptocoinsComponent', () => {
  let component: CryptocoinsComponent;
  let fixture: ComponentFixture<CryptocoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptocoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptocoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
