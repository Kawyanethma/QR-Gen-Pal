import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueskyButton } from './bluesky-button';

describe('BlueskyButton', () => {
  let component: BlueskyButton;
  let fixture: ComponentFixture<BlueskyButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlueskyButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueskyButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
