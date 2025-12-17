import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import logo from '@/assets/favicon.png';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollOrNavigate = (href: string) => {
    // If not on homepage, navigate to homepage with hash so Index auto-scrolls
    if (location.pathname !== '/') {
      navigate(`/${href}`);
      return;
    }

    // if on homepage, scroll directly
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/${href}`);
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="MTC Logo" className="h-10 w-auto bg-background p-1 rounded" />
              <span className="text-sm font-semibold leading-tight">
                PT Metropole Trikarya<br />Ciptaperkasa
              </span>
            </div>
            <p className="text-sm text-background/70">
              Indonesia's only authorized Chichibu Japan and Tuffloor distributor. Industrial floor hardener specialist since 1997. Serving Jakarta, Cibitung, Cikarang, Karawang, Cikampek, Bandung, Bekasi, Tangerang, and nationwide with premium liquid hardener, dry shake, and floor repair solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Projects', href: '#projects' },
                { label: 'Products', href: '#products' },
                // { label: 'Articles', href: '#blog' }, // Temporary Hidden
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollOrNavigate(link.href)}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Liquid Floor Hardener</li>
              <li>Dry Shake Floor Hardener</li>
              <li>Repair & Restoration</li>
              <li>Waterproofing Solutions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-background/70">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                Jl. Hayam Wuruk 62, Jakarta 11160
              </li>
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Phone className="h-4 w-4 flex-shrink-0" />
                (021) 639-0290
              </li>
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Phone className="h-4 w-4 flex-shrink-0" />
                (021) 649-8653
              </li>
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Mail className="h-4 w-4 flex-shrink-0" />
                mtc629@gmail.com
              </li>
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Mail className="h-4 w-4 flex-shrink-0" />
                mtcpt62@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center">
          <p className="text-sm text-background/60">
            © {currentYear} PT Metropole Trikarya Ciptaperkasa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
