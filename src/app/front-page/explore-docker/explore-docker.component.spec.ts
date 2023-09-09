import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreDockerComponent } from './explore-docker.component';

describe('ExploreDockerComponent', () => {
  let component: ExploreDockerComponent;
  let fixture: ComponentFixture<ExploreDockerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreDockerComponent]
    });
    fixture = TestBed.createComponent(ExploreDockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
