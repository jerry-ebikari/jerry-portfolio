import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, {EmailJSResponseStatus} from '@emailjs/browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  success: boolean = false;
  sent: boolean = false;
  contactForm: FormGroup = new FormGroup({});
  submitted: boolean = false;
  apikey: string = environment.MAILGUN_APIKEY;
  headers = new HttpHeaders({
    'enctype': 'multipart/form-data',
    'Authorization': `Basic ${btoa('api:' + environment.MAILGUN_APIKEY)}`,
    'Content-Type': "application/json",
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, x-requested-with',
    'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, OPTIONS'
  });

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    })
  }

  checkError(formControlName: string) {
    return this.contactForm.get(formControlName)?.errors;
  }

  checkTouched(formControlName: string) {
    return this.contactForm.get(formControlName)?.touched;
  }

  sendEmail(contactForm: HTMLFormElement) {
    if (this.contactForm.valid) {
      const formData = new FormData();
      formData.append('from', 'Mailgun Sandbox <postmaster@sandbox05b56db78742482b87714dd064ceb3c1.mailgun.org>')
      formData.append('to', 'jerryebikarineedam@gmail.com');
      formData.append('subject', 'Portfolio Contact Form Message from ' + this.contactForm.get('name')?.value + '( ' + this.contactForm.get('email')?.value + ')');
      formData.append('text', this.contactForm.get('message')?.value);
      this.submitted = true;
      this.http
      .post(
        'https://api.mailgun.net/v3/sandbox05b56db78742482b87714dd064ceb3c1.mailgun.org/messages',
        formData, 
        { headers: this.headers }
      ).subscribe(
        res => {
          this.submitted = false;
          this.contactForm.reset();
          this.sent = true;
          this.success = true;
          let t = setInterval(() => {
            this.success = false;
            clearInterval(t);
          }, 3000);
        },
        err => {
          this.submitted = false;
          this.sent = false;
          this.success = true;
          let t = setInterval(() => {
            this.success = false;
            clearInterval(t);
          }, 3000);
        }
      );
    } 
  }

}
