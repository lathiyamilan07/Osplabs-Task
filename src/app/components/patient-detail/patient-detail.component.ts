import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent implements OnInit {
  UserForm! : FormGroup;;
  isSubmitted : boolean = false;
  UserArr : any = []
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.UserForm = this.fb.group({
      firstname : ['', Validators.required],
      lastname : ['', Validators.required],
      phone : ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
      email : ['',[Validators.required,Validators.email]],
      address1 : ['',[Validators.required]],
      address2 : ['',[Validators.required]],
      city : ['',[Validators.required]],
      state : ['',[Validators.required]],
      zipcode : ['',[Validators.required,Validators.pattern("^[0-9]*$")]],
  })
  }


  SubmitForm(){

    let Arr : any = localStorage.getItem('UserList')

    if(Arr != null){
      this.UserArr = JSON.parse(Arr)
    }
    this.isSubmitted = true
    if(this.UserForm.valid){
      let RandomId = Math.floor(Math.random() * 1000)
      
      let Obj : any = {
        id : RandomId,
        firstname : this.UserForm.value.firstname,
        lastname : this.UserForm.value.lastname,
        phone : this.UserForm.value.phone,
        email : this.UserForm.value.email,
        address1 : this.UserForm.value.address1,
        address2 : this.UserForm.value.address2,
        city : this.UserForm.value.city,
        state : this.UserForm.value.state,
        zipcode : this.UserForm.value.zipcode,
      }
  
      this.UserArr.push(Obj)
      localStorage.setItem('UserList', JSON.stringify(this.UserArr))
      this.UserForm.reset()
      this.isSubmitted = false
    }

  }

}
