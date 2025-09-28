import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataForms } from './data-forms';

describe('DataForms', () => {
  let component: DataForms;
  let fixture: ComponentFixture<DataForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataForms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
