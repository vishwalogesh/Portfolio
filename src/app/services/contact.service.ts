import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {
    // Initialize EmailJS with your Public Key
    // Get this from: https://dashboard.emailjs.com/admin (Account > API Keys)
    emailjs.init('12MX6gGlveSN3L2FY');
  }

  sendEmail(formData: { name: string; email: string; message: string }) {
    const templateParams = {
      to_email: 'svishwalogesh8888@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    return emailjs.send(
      'service_9urd2km', // Get from EmailJS dashboard
      'template_7d4f4lf', // Get from EmailJS dashboard
      templateParams
    );
  }
}
