import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../Services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeForm: FormGroup;
  successMessage: string = "";
  errorMessage: string = "";
  showSuccessMessage: boolean = false;
  showErrorMessage: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: EmployeeService,
    private router: Router
  ) {
    // Initialize the form group in the constructor
    this.addEmployeeForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      phoneNumber: [null, [Validators.required]],
      position: [null, [Validators.required]],
      department: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {}

  addEmployee() {
    console.log("Form Data: ", this.addEmployeeForm.value);  
    if (this.addEmployeeForm.valid) {
      this.service.addEmployee(this.addEmployeeForm.value).subscribe(
        (res) => {
          console.log(res);
          this.showSuccessMessage = true;
          this.successMessage = "Employee added successfully";
          this.router.navigateByUrl('/Employees');
        },
        (error) => {
          this.showErrorMessage = true;
          this.errorMessage = "There has been an error! Try again";
        }
      );
    }
  }
}
