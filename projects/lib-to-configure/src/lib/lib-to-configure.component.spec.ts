import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibToConfigureComponent } from './lib-to-configure.component';

describe('LibToConfigureComponent', () => {
  let component: LibToConfigureComponent;
  let fixture: ComponentFixture<LibToConfigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibToConfigureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibToConfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
