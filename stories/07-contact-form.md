# Story 7: Contact Form

## Description
Implement a contact form with Resend integration for email delivery. Includes client and server-side validation, error handling, and proper security measures.

## Acceptance Criteria
- [ ] Contact page route created (`/contact`)
- [ ] ContactForm component with Name, Email, Message fields
- [ ] Client-side form validation
- [ ] Server-side validation in API route
- [ ] Resend integration working
- [ ] Success and error states displayed
- [ ] Form submission feedback to user
- [ ] Environment variable for Resend API key
- [ ] Rate limiting considered (basic implementation)

## Technical Details

### Dependencies to Install
```json
{
  "dependencies": {
    "resend": "^3.0.0"
  }
}
```

### Components to Create
- `components/ContactForm.tsx` - Contact form component

### Files to Create
- `app/contact/page.tsx` - Contact page
- `app/api/contact/route.ts` - API route for email sending
- `lib/resend.ts` - Resend email client utility

### Form Fields
- Name (required, text input)
- Email (required, email validation)
- Message (required, textarea)

### Validation Requirements
**Client-side:**
- Required field validation
- Email format validation
- Message length validation (min/max)

**Server-side:**
- All client validations repeated
- Sanitize inputs
- Check for spam patterns (basic)

### API Route Implementation
- POST endpoint at `/api/contact`
- Validate request body
- Sanitize inputs
- Send email via Resend
- Return appropriate responses
- Handle errors gracefully

### Email Template
- From: Contact form (your email)
- To: Your email address
- Subject: Contact form submission from [Name]
- Body: Include name, email, and message

### Environment Variables
```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

## Dependencies
- Story 1: Project Setup
- Story 1.5: Design System & Aesthetic Foundation
- Story 2: Navigation & Footer
- Resend account created and API key obtained

## Notes
- Never expose API key in client-side code
- Implement basic rate limiting (e.g., one submission per minute per IP)
- Use environment variables for sensitive data
- Test form submission end-to-end
- Ensure error messages are user-friendly but don't leak system info
- Consider adding a honeypot field for spam prevention
- Test with actual Resend account before deploying
