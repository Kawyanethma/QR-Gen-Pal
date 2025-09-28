import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCard } from './qr-card';

describe('QrCard', () => {
  let component: QrCard;
  let fixture: ComponentFixture<QrCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
