import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit {

  form:FormGroup;

  constructor(private formBuilder:FormBuilder, private authService:AuthService, private route:Router) {
    this.form = this.formBuilder.group({
      username:['', [Validators.required, Validators.minLength(4), Validators.maxLength(28)]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8), Validators.maxLength(60)]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.authService.signup(this.form.value).subscribe(data=>{
      JSON.stringify(data);
      this.route.navigate(['/login']);
    }, error => {
      console.error(error);
    })
  }

  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password');
  }

  get Username() {
    return this.form.get('username');
  }

}
