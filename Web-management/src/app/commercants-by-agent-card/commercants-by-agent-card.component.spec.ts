import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercantsByAgentCardComponent } from './commercants-by-agent-card.component';

describe('CommercantsByAgentCardComponent', () => {
  let component: CommercantsByAgentCardComponent;
  let fixture: ComponentFixture<CommercantsByAgentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercantsByAgentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercantsByAgentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
