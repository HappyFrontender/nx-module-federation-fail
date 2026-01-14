import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureA } from './feature-a';

describe('FeatureA', () => {
  let component: FeatureA;
  let fixture: ComponentFixture<FeatureA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureA],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureA);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
