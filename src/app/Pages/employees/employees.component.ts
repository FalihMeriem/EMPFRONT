import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';
import { Employee } from '../../Models/employee';
@Component({
  selector: 'app-employees',
  
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent  implements OnInit{
  filteredEmployees: any[]=[];
  searchTerm: string= '';
  USER:any;
 

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployees();

  }

getAllEmployees(){
  this.employeeService.getEmployees().subscribe(data => {
    this.employees = data;
    this.filteredEmployees = data;

  });
}

  
onSearch() {
  const searchTermLower = this.searchTerm.toString().toLowerCase().trim();

  if (searchTermLower === '') {
    console.log("unfiltered data");
    this.filteredEmployees = this.employees;
  } else {
    console.log("filtered data");
    this.filteredEmployees = this.employees.filter(employees =>
      (employees.firstName !== null && employees.firstName.toLowerCase().includes(searchTermLower)) ||
      (employees.lastName !== null && employees.lastName.toLowerCase().includes(searchTermLower)) ||
      (employees.position !== null && employees.position.toLowerCase().includes(searchTermLower)) ||
      (employees.email !== null && employees.email.toLowerCase().includes(searchTermLower))
    );
  }
}



 
deleteEmployee(id: any) {
  

  
      this.employeeService.deleteEmployee(id).subscribe((res) => {
        console.log(res);
        this.getAllEmployees();

      });
   
}
}
