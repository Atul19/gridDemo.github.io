import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridpocComponent } from './gridpoc.component';

describe('GridpocComponent', () => {
  let component: GridpocComponent;
  let fixture: ComponentFixture<GridpocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridpocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridpocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
