import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EMAILJS_CONFIG } from '../config/emailjs-config';

@Component({
  selector: 'app-contact-page',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPage {
  private readonly formBuilder = inject(FormBuilder);

  protected readonly form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required]],
    company: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required]]
  });

  protected readonly submitted = signal(false);
  protected readonly isSubmitting = signal(false);
  protected readonly submitSucceeded = signal(false);
  protected readonly submitError = signal('');
  protected readonly isInvalid = computed(() => this.form.invalid && (this.form.touched || this.submitted()));

  protected async onSubmit(): Promise<void> {
    this.submitted.set(true);
    this.form.markAllAsTouched();
    this.submitSucceeded.set(false);
    this.submitError.set('');

    if (this.form.invalid) {
      return;
    }

    this.isSubmitting.set(true);

    try {
      if (
        EMAILJS_CONFIG.serviceId.startsWith('YOUR_') ||
        EMAILJS_CONFIG.templateId.startsWith('YOUR_') ||
        EMAILJS_CONFIG.publicKey.startsWith('YOUR_')
      ) {
        throw new Error('EmailJS is not configured.');
      }

      const payload = this.form.getRawValue();

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          name: payload.name,
          title: "Request a Demo from MachineKeepr's Website",
          company: payload.company,
          email: payload.email,
          message: payload.message,
          reply_to: payload.email,
          to_email: EMAILJS_CONFIG.recipientEmail
        },
        {
          publicKey: EMAILJS_CONFIG.publicKey
        }
      );

      this.submitSucceeded.set(true);
      this.form.reset({
        name: '',
        company: '',
        email: '',
        message: ''
      });
    } catch {
      this.submitError.set('Request could not be sent right now. Please try again or email info@sharpfloornc.com.');
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
