import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../Services/employee.service';
 


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})





export class NavBarComponent implements OnInit {
 
constructor( 
  private router: Router,
  
  private employeeService: EmployeeService){  }
    

ngOnInit() { }
 


 



 
 

}
