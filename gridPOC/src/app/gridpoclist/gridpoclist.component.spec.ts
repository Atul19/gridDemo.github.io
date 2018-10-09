import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridpoclistComponent } from './gridpoclist.component';

describe('GridpoclistComponent', () => {
  let component: GridpoclistComponent;
  let fixture: ComponentFixture<GridpoclistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridpoclistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridpoclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
