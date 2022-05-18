import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should contain "Login"', () => {
    //const comp = new HomeComponent();
    //let fixture: ComponentFixture<HomeComponent>;
    // y
    
    
//  let buttonElement = fixture.debugElement.nativeElement.querySelector('.set-button');
//  console.log("Button Elemenet",buttonElement)
//  expect(buttonElement.innerHTML).toBe('Pass to Parent');
    
    // expect(bannerElement.textContent).toContain('Login');
    let formElement = fixture.debugElement.nativeElement.querySelector('.set-button');
    console.log("Form Elemenet",formElement)
    expect(formElement.innerHTML).toBe('Login');

    });
});
