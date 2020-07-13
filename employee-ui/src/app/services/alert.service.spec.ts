import { TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { AlertService } from './alert.service';


describe('AlertService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [ AppModule ]}));

  it('should be created', () => {
    const service: AlertService = TestBed.get(AlertService);
    expect(service).toBeTruthy();
  });
});
