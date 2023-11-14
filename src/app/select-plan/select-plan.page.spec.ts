import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectPlanPage } from './select-plan.page';

describe('SelectPlanPage', () => {
  let component: SelectPlanPage;
  let fixture: ComponentFixture<SelectPlanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelectPlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
