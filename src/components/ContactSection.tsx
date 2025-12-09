import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Requesting quotation info from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:mtc629@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: 'Opening Email Client',
      description: 'Your email client will open to send the message.',
    });
    setFormData({ name: '', email: '', message: '' });
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

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Office Address</h3>
                  <p className="text-muted-foreground">
                    PT Metropole Trikarya Ciptaperkasa<br />
                    Jl. Hayam Wuruk 62<br />
                    Jakarta 11160, Indonesia
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground">
                    (021) 639-0290<br />
                    (021) 649-8653
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">
                    mtcpt62@gmail.com<br />
                    mtc629@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Service Coverage Area - NEW ADDITION */}
            <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Service Coverage Area
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We provide Chichibu and Tuffloor floor hardener installation and repair services throughout{' '}
                <strong>Jakarta, Bogor, Depok, Tangerang, Bekasi (Jabodetabek), Karawang, Cikarang, 
                Purwakarta, Cikampek, Bandung, Semarang, Surabaya, Sumatra, Kalimantan, Sulawesi, Papua, Medan,</strong> and all major 
                industrial areas in Indonesia.
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

          <div className="bg-secondary p-8 rounded-xl">
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