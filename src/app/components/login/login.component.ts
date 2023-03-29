import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  constructor(private formBuilder:FormBuilder, private authService:AuthService, private route:Router) {
    this.form = this.formBuilder.group({
        email:['', [Validators.required, Validators.email]],
        password:['', [Validators.required, Validators.minLength(8), Validators.maxLength(60)]]
      })
  }

  ngOnInit(): void { }

  onSubmit(event: Event) {
    event.preventDefault();
    this.authService.login(this.form.value).subscribe(data=>{
      JSON.stringify(data);
      this.route.navigate(['/portfolio']);
    })
  }

  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password');
  }

}
