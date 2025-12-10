import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const WA_NUMBER = '62811854581'; // no +, no spaces
const WA_LINK = `https://wa.me/${WA_NUMBER}`;

const safeGtag = (eventName: string, params?: Record<string, any>) => {
  try {
    // @ts-ignore
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      // @ts-ignore
      (window as any).gtag('event', eventName, params || {});
    }
  } catch (e) {
    // ignore errors (e.g., GA not installed, privacy mode)
  }
};

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Requesting quotation info from ${formData.name || 'Guest'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // track email click
    safeGtag('contact_email_click', {
      event_category: 'engagement',
      event_label: 'contact_form_mailto',
    });

    // open mail client
    window.location.href = `mailto:mtc629@gmail.com?subject=${subject}&body=${body}`;

    toast({
      title: 'Opening Email Client',
      description: 'Your email client will open to send the message.',
    });

    setFormData({ name: '', email: '', message: '' });
  };

  const handleWhatsAppClick = () => {
    safeGtag('whatsapp_click', {
      event_category: 'engagement',
      event_label: 'Contact Section WA Link',
      phone: WA_NUMBER,
    });
    window.open(WA_LINK, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">Contact Us</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground">
            Ready to discuss your industrial flooring project? Contact us for a consultation and quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Office Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Office Address</h3>
                  <p className="text-muted-foreground">
                    PT Metropole Trikarya Ciptaperkasa
                    <br />
                    Jl. Hayam Wuruk 62
                    <br />
                    Jakarta 11160, Indonesia
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground">
                    (021) 639-0290
                    <br />
                    (021) 649-8653
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-green-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M20.52 3.48A11.82 11.82 0 0 0 12 0C5.37 0 0 5.37 0 12a11.9 11.9 0 0 0 1.68 6.04L0 24l6.27-1.64A11.86 11.86 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.18-1.24-6.17-3.48-8.52zM12 21.6c-1.9 0-3.73-.55-5.31-1.59l-.38-.24-3.72.97L3 17.66l-.25-.4A9.57 9.57 0 0 1 2.4 12c0-5.29 4.31-9.6 9.6-9.6 2.57 0 5.02 1 6.88 2.83A9.58 9.58 0 0 1 21.6 12c0 5.29-4.31 9.6-9.6 9.6zm5.02-7.86c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.61.14-.18.27-.7.89-.86 1.07-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.32-1.56-1.48-1.83-.16-.27-.02-.42.12-.56.13-.13.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.28 0 1.34.99 2.64 1.13 2.82.14.18 1.95 3.02 4.71 4.24.66.28 1.17.45 1.57.57.66.21 1.27.18 1.75.11.53-.08 1.62-.66 1.85-1.3.23-.64.23-1.19.16-1.3-.07-.11-.25-.18-.52-.32z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                  <p className="text-muted-foreground">
                    <button
                      type="button"
                      onClick={handleWhatsAppClick}
                      className="text-green-600 font-medium hover:underline inline-flex items-center gap-2"
                    >
                      +62 811-854-581
                    </button>
                    <br />
                    <span className="text-sm text-muted-foreground">
                      Fastest way to get a quote — chat with us on WhatsApp
                    </span>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">
                    mtcpt62@gmail.com
                    <br />
                    mtc629@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Service Coverage Area */}
            <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Service Coverage Area
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We provide Chichibu and Tuffloor floor hardener installation and repair services throughout{' '}
                <strong>
                  Jakarta, Bogor, Depok, Tangerang, Bekasi (Jabodetabek), Karawang, Cikarang, Purwakarta,
                  Cikampek, Bandung, Semarang, Surabaya, Sumatra, Kalimantan, Sulawesi, Papua, Medan,
                </strong>{' '}
                and all major industrial areas in Indonesia.
              </p>
            </div>

            {/* Google Map */}
            <div
              className="relative w-full rounded-xl overflow-hidden border border-border"
              style={{ paddingTop: '56.25%' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.797488778107!2d106.81634017455566!3d-6.157871393829286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f60a0ab8627d%3A0x6667848cf44df3c1!2sMetropole%20Trading%20Company!5e0!3m2!1sen!2sid!4v1764917196368!5m2!1sen!2sid"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-secondary p-8 rounded-xl w-full lg:w-[660px]">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project or inquiry..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full gap-2">
                <Send className="h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
