import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Benny.',
  openGraph: {
    title: 'Contact | Benny\'s Site',
    description: 'Get in touch with Benny.',
  },
}

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mb-8">
        Contact
      </h1>
      <p className="text-black mb-8 leading-relaxed">
        Have a question or want to collaborate? Send me a message and I&apos;ll get back to you as soon as possible.
      </p>
      <ContactForm />
    </div>
  )
}
