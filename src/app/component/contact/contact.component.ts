import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(
    private formBuilder: FormBuilder,
  ) {}

  public form = this.formBuilder.group({
    firstname: [
      '',
      Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(35),
        Validators.required,
      ]),
    ],
    lastname: [
      '',
      Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(35),
        Validators.required,
      ]),
    ],
    email: [
      '',
      Validators.compose([
        Validators.minLength(9),
        Validators.maxLength(35),
        Validators.email,
        Validators.required,
      ]),
    ],
    message: [
      '',
      Validators.compose([Validators.required, Validators.minLength(10)]),
    ],
  });

  public formValid: boolean = false;

  async sendMail(form: any) {
    if (form.status === 'VALID') {
      emailjs.init(environment.apiKey);

      let params = {
        from_name: `Firstname: ${form.value.firstname} Lastname: ${form.value.lastname}`,
        email_id: form.value.email,
        message: form.value.message,
      };

      try {
        const mail = await emailjs.send(
          environment.service,
          environment.template,
          params
        );

        form.reset();
        this.formValid = true;
        setTimeout(() => {
          this.formValid = false;
        }, 4500);
      } catch (err) {
        console.log(err);
      }
    }
  }
}
