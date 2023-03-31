import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  ShowSide : boolean = true;
  ActiveTab : string = 'patient';
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  ShowSideBar(){
    if(this.ShowSide == true){
        this.ShowSide = false
    }
    else{
      this.ShowSide = true
    }
  }

  SetActivetab(tab:any){
      this.ActiveTab = tab
  }

  LogoutUser(){
      localStorage.removeItem('user')
      this.router.navigate(['/home'])
  }

}
