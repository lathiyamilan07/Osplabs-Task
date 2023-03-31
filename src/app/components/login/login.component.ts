import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm! : FormGroup;
  isSubmitted : boolean = false;
  isChecked : boolean = false;
  constructor(private fb : FormBuilder, private router : Router) { }

  ngOnInit(): void {
      this.LoginForm = this.fb.group({
          email : ['',[Validators.required,Validators.email]],
          password : ['',[Validators.required]],
      })
  }

  checkBoxValue(event:any){
      this.isChecked = event.target.checked
  }

  // form submitted 
  SubmitFrom(){
      this.isSubmitted = true

      if(this.LoginForm.valid){
        if(this.isChecked == true){
            localStorage.setItem('user',JSON.stringify(this.LoginForm.value))
            this.router.navigate(['/patient'])
        }
      }
  }

}
