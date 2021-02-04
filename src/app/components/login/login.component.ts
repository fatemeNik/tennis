import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})  
export class LoginComponent implements OnInit {


  public loginForm: FormGroup;
  public SignUpForm: FormGroup;
  public text = '';

  constructor(private formbuildr:FormBuilder, private http:HttpClient,
     private auth: AuthenticationService,public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
    this.loginForm = this.formbuildr.group({
      iripin :['', [Validators.required]],
      password :['', [Validators.required]],
    });

    this.SignUpForm = this.formbuildr.group({
      a_iripin :['', [Validators.required]],
      a_password :['', [Validators.required]],
      a_con_password :['', [Validators.required]]
    });
  }

  login(){
    
    if(this.f.iripin.invalid){
      this.text = "iripin is invalid!";
      return
    }else if (this.f.password.invalid) {
      this.text = "Password Empty!!!"
      
    }else{

      this.auth.login(this.loginForm.value).subscribe(data =>   
        {
          if(data)
            this.onNoClick();
          console.log(data);
        },
        err=>{
          this.text = "iripin or Password is wrong!!!"
        })
    }
  } 

  onNoClick(): void {
    this.dialogRef.close();
  }

  get f(){
    return this.loginForm.controls;
  }

}