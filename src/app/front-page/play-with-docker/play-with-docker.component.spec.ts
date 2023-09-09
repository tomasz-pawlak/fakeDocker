import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayWithDockerComponent } from './play-with-docker.component';

describe('PlayWithDockerComponent', () => {
  let component: PlayWithDockerComponent;
  let fixture: ComponentFixture<PlayWithDockerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayWithDockerComponent]
    });
    fixture = TestBed.createComponent(PlayWithDockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
