import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubButton } from './github-button';

describe('GithubButton', () => {
  let component: GithubButton;
  let fixture: ComponentFixture<GithubButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
