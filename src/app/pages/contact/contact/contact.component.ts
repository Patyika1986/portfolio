import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailJSResponseStatus } from '@emailjs/browser';
import * as emailjs from '@emailjs/browser';
import { environment } from '../../../../environments/environment';
import { NotificationComponent } from 'src/app/shared/notification/notification.component';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  @ViewChild(NotificationComponent) notification!: NotificationComponent;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
    console.log(environment.production);
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const { name, email, message } = this.contactForm.value;
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message
      };

      emailjs
        .send(
          environment.serviceId,
          environment.templateId,
          templateParams,
          environment.publicKey
        )
        .then((response: EmailJSResponseStatus) => {
          this.notification.show('Email sent successfully!', true);
          this.contactForm.reset();
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          this.notification.show('Failed to send email. Please try again.', false);
        });
    }
  }
}
