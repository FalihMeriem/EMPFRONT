import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../Services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
  updateUserForm: FormGroup;
  successMessage: string = "";
  errorMessage: string = "";
  showSuccessMessage: boolean = false;
  showErrorMessage: boolean = false;
  id: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: EmployeeService,
    private fb: FormBuilder,
    private router: Router
  ) {
    // Initialize the form group in the constructor
    this.updateUserForm = this.fb.group({
      id: [null],  // Include id in the form group
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      position: [null, [Validators.required]],
      department: [null, [Validators.required]]
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getEmployeeById();
  }

  getEmployeeById() {
    this.service.getEmployee(this.id).subscribe(
      (res) => {
        console.log(res);
        this.updateUserForm.patchValue(res);
      },
      (error) => {
        this.showErrorMessage = true;
        this.errorMessage = "Error fetching employee data";
      }
    );
  }

  updateEmployee() {
    console.log("Form Data: ", this.updateUserForm.value);  // Log form data
    if (this.updateUserForm.valid) {
      this.service.updateEmployee(this.id, this.updateUserForm.value).subscribe(
        (res) => {
          console.log(res);
          this.showSuccessMessage = true;
          this.successMessage = "Employee updated successfully";
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
