import { Location } from '@angular/common';
import { async, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RegisterComponent } from './register/register.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'employee-ui'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Employee Portal');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Employee Portal');
  });
});

describe('Router: App', () => {

  let location: Location;
  let router: Router;
  let fixture;
  const routes: Routes = [
    { path: '', redirectTo: 'employee-details', pathMatch: 'full' },
    { path: 'register', component: RegisterComponent },
    { path: 'employee-details', component: EmployeeListComponent, pathMatch: 'full' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule.withRoutes(routes),
      ],
      declarations: [
      ]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });


  it('fakeAsync works', fakeAsync(() => {
    const promise = new Promise(resolve => {
      setTimeout(resolve, 10);
    });
    let done = false;
    promise.then(() => (done = true));
    tick(50);
    expect(done).toBeTruthy();
  }));

  it('navigate to "" redirects you to /employee-details', fakeAsync(() => {
    router.navigate(['']).then(() => {
      tick(50);
      expect(location.path()).toBe('/employee-details');
    });
  }));

  it('navigate to "register" takes you to /register', fakeAsync(() => {
    router.navigate(['/register']).then(() => {
      tick(50);
      expect(location.path()).toBe('/register');
    });
  }));
})