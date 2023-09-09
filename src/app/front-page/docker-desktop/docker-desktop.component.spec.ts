import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerDesktopComponent } from './docker-desktop.component';

describe('DockerDesktopComponent', () => {
  let component: DockerDesktopComponent;
  let fixture: ComponentFixture<DockerDesktopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DockerDesktopComponent]
    });
    fixture = TestBed.createComponent(DockerDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
