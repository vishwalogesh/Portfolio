import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  contactForm: FormGroup;
  loading = signal(false);
  successMessage = signal('');
  errorMessage = signal('');

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]], 
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
    });
  }

  getFieldError(fieldName: string): string {
    const control = this.contactForm.get(fieldName);
    if (!control || !control.errors || !control.touched) {
      return '';
    }
    
    if (control.errors['required']) {
      return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required.`;
    }
    if (control.errors['minlength']) {
      return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be at least ${control.errors['minlength'].requiredLength} characters.`;
    }
    if (control.errors['maxlength']) {
      return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} cannot exceed ${control.errors['maxlength'].requiredLength} characters.`;
    }
    if (control.errors['email'] || control.errors['pattern']) {
      return 'Please enter a valid email address.';
    }
    return '';
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.errorMessage.set('Please fill all fields correctly.');
      return;
    }

    this.loading.set(true);
    this.successMessage.set('');
    this.errorMessage.set('');

    this.contactService.sendEmail(this.contactForm.value).then(
      (response) => {
        this.loading.set(false);
        this.successMessage.set('Email sent successfully! I will get back to you soon.');
        this.contactForm.reset();
        setTimeout(() => this.successMessage.set(''), 5000);
      },
      (error) => {
        this.loading.set(false);
        this.errorMessage.set('Failed to send email. Please try again later.');
        console.error('Email error:', error);
        setTimeout(() => this.errorMessage.set(''), 5000);
      }
    );
  }
}
