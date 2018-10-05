import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoListHeaderComponent } from './crypto-list-header.component';

describe('CryptoListHeaderComponent', () => {
  let component: CryptoListHeaderComponent;
  let fixture: ComponentFixture<CryptoListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
