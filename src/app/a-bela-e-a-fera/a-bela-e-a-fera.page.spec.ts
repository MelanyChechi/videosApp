import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ABelaEAFeraPage } from './a-bela-e-a-fera.page';

describe('ABelaEAFeraPage', () => {
  let component: ABelaEAFeraPage;
  let fixture: ComponentFixture<ABelaEAFeraPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ABelaEAFeraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ABelaEAFeraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
