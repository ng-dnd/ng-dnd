import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DRAG_DROP_MANAGER, DndModule } from '@ng-dnd/core';
import { TestBackend } from 'react-dnd-test-backend';
import { Test } from './test';

describe(Test.name, () => {
  let component: Test;
  let fixture: ComponentFixture<Test>;
  let backend: any;
  let source: any;
  let target: any;

  // Tests whether the dragging class has applied
  const draggingClassApplied = () => {
    return fixture.debugElement.query(By.css('.dragging')) != null;
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [DndModule.forRoot({ backend: TestBackend }), Test],
    }).compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    const manager = TestBed.inject(DRAG_DROP_MANAGER);
    backend = manager.getBackend();
    fixture = TestBed.createComponent(Test);
    component = fixture.componentInstance;
    fixture.detectChanges();
    source = component.source.getHandlerId();
    target = component.target.getHandlerId();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should drag and then drop', () => {
    backend.simulateBeginDrag([source]);
    fixture.detectChanges();
    expect(draggingClassApplied()).toBeTruthy();

    backend.simulateHover([target]);
    backend.simulateDrop();
    backend.simulateEndDrag();
    expect(component.dropped).toBeTruthy();
    expect(component.endDrag).toBeTruthy();
    fixture.detectChanges();
    expect(draggingClassApplied()).toBeFalsy();
  });

  it('should not react to a plain end drag', () => {
    backend.simulateBeginDrag([source]);
    backend.simulateHover([target]);
    backend.simulateEndDrag();
    expect(component.dropped).toBeFalsy();
    expect(component.endDrag).toBeTruthy();
    fixture.detectChanges();
    expect(draggingClassApplied()).toBeFalsy();
  });
});
