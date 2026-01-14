import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureB } from './feature-b';

describe('FeatureB', () => {
  let component: FeatureB;
  let fixture: ComponentFixture<FeatureB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureB],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureB);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
