import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit, DoCheck {

  UserList : any;
  SearchText : any;
  UserObj : any;
  EditUserForm! : FormGroup;
  isSubmitted : boolean = false

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
      this.EditUserForm = this.fb.group({
        id : [''],
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

  ngDoCheck(): void {
    let arr : any = localStorage.getItem('UserList')
    this.UserList = JSON.parse(arr)
  }

  DeleteUser(userId:any){
    this.UserList = this.UserList.filter((i:any) => i.id != userId)
    localStorage.setItem('UserList', JSON.stringify(this.UserList))
  }

  EditUser(user:any){
    this.EditUserForm.patchValue({
      id : user.id,
      firstname : user.firstname,
      lastname : user.lastname,
      email : user.email,
      phone : user.phone,
      address1 : user.address1,
      address2 : user.address2,
      city : user.city,
      state : user.state,
      zipcode : user.zipcode
    })
  }

  UserDetail(user:any){
      this.UserObj =  {
          firstname : user.firstname,
          lastname : user.lastname,
          email : user.email,
          phone : user.phone,
          address1 : user.address1,
          address2 : user.address2,
          city : user.city,
          state : user.state,
          pincode : user.zipcode
      }
  }


  UpdateUser(){
      this.isSubmitted = true

      if(this.EditUserForm.valid){
          
          this.UserList.forEach((i:any) => {
              if(i.id == this.EditUserForm.value.id){
                  i.id = this.EditUserForm.value.id
                  i.firstname = this.EditUserForm.value.firstname
                  i.lastname = this.EditUserForm.value.lastname
                  i.email = this.EditUserForm.value.email
                  i.phone = this.EditUserForm.value.phone
                  i.address1 = this.EditUserForm.value.address1
                  i.address2 = this.EditUserForm.value.address2
                  i.city = this.EditUserForm.value.city
                  i.state = this.EditUserForm.value.state
                  i.zipcode = this.EditUserForm.value.zipcode

                  localStorage.setItem('UserList', JSON.stringify(this.UserList))
              }
          })
      }
  }

}
