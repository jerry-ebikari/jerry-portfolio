import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, {EmailJSResponseStatus} from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({});
  submitted: boolean = false;

  constructor() { }

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
      this.submitted = true;
      emailjs.sendForm('service_ko084z7', 'contact_form', contactForm, 'Rhc2S3ZDKH_ZNJIb2')
        .then((result: EmailJSResponseStatus) => {
          this.submitted = false;
          console.log(result.text);
          this.contactForm.reset();
        }, (error) => {
          this.submitted = false;
          console.log(error.text);
        });
    }
    
  }

}
