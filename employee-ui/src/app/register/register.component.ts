import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../services/alert.service';
import { EmployeeService } from './../services/employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private employeeService: EmployeeService,
        private alertService: AlertService
    ) {
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            dob: ['', Validators.required],
            gender: ['', Validators.required],
            department: ['', Validators.required],
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.employeeService.addEmployee(this.registerForm.value)
            .subscribe(
                data => {
                    this.alertService.success(data.toString(), true);
                    this.loading = false;
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

}
