import { TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { EmployeeService } from './employee.service';


describe('EmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [ AppModule ]}));

  it('should be created', () => {
    const service: EmployeeService = TestBed.get(EmployeeService);
    expect(service).toBeTruthy();
  });
});
