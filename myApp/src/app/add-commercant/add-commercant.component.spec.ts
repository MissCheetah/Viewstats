import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddCommercantComponent } from './add-commercant.component';

describe('AddCommercantComponent', () => {
  let component: AddCommercantComponent;
  let fixture: ComponentFixture<AddCommercantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCommercantComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddCommercantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
