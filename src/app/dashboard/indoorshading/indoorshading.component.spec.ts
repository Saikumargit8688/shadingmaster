import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoorshadingComponent } from './indoorshading.component';

describe('IndoorshadingComponent', () => {
  let component: IndoorshadingComponent;
  let fixture: ComponentFixture<IndoorshadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndoorshadingComponent]
    });
    fixture = TestBed.createComponent(IndoorshadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
