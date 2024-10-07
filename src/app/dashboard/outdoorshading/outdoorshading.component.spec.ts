import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorshadingComponent } from './outdoorshading.component';

describe('OutdoorshadingComponent', () => {
  let component: OutdoorshadingComponent;
  let fixture: ComponentFixture<OutdoorshadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutdoorshadingComponent]
    });
    fixture = TestBed.createComponent(OutdoorshadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
