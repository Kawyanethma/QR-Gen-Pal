import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterButton } from './twitter-button';

describe('TwitterButton', () => {
  let component: TwitterButton;
  let fixture: ComponentFixture<TwitterButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwitterButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwitterButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
