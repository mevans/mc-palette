import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalettesPageComponent } from './palettes-page.component';

describe('PalettesPageComponent', () => {
  let component: PalettesPageComponent;
  let fixture: ComponentFixture<PalettesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalettesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalettesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
