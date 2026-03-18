import { Link } from '@/lib/next-compat';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from '@/components/icons';
import { Button } from '@/components/ui/button';

const treatments = [
  { slug: 'dental-implants', label: 'Dental Implants' },
  { slug: 'root-canal-treatments', label: 'Root Canal Treatments' },
  { slug: 'ceramic-crowns-bridges', label: 'Ceramic Crowns & Bridges' },
  { slug: 'wisdom-tooth-surgery', label: 'Wisdom Tooth Surgery' },
  { slug: 'gum-surgeries', label: 'Gum Surgeries' },
  { slug: 'invisalign', label: 'Invisalign' },
  { slug: 'veneers-smile-designing', label: 'Veneers & Smile Designing' },
  { slug: 'teeth-cleaning-polishing', label: 'Teeth Cleaning & Polishing' },
  { slug: 'dental-fillings', label: 'Dental Fillings' },
  { slug: 'dentures', label: 'Dentures' },
  { slug: 'night-guard', label: 'Night Guard' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileTreatmentsOpen, setIsMobileTreatmentsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <div className="h-16 w-48 sm:w-56 md:w-64">
              <img
                src="/3.png"
                alt="Vakharia Multispeciality Dental Clinic"
                className="h-full w-full object-cover"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-dental-teal transition-colors font-medium">
              Home
            </Link>
            <Link href="/about-us" className="text-foreground hover:text-dental-teal transition-colors font-medium">
              About Us
            </Link>

            <div className="relative group">
              <button className="flex items-center text-foreground hover:text-dental-teal transition-colors font-medium">
                Treatments
                <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/treatments"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-dental-blue-light hover:text-dental-teal transition-colors font-semibold border-b"
                >
                  All Treatments
                </Link>
                <div className="max-h-96 overflow-y-auto">
                  {treatments.map((treatment) => (
                    <Link
                      key={treatment.slug}
                      href={`/treatments/${treatment.slug}`}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-dental-blue-light hover:text-dental-teal transition-colors"
                    >
                      {treatment.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/contact-us" className="text-foreground hover:text-dental-teal transition-colors font-medium">
              Contact Us
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+916352104371" className="flex items-center text-dental-teal">
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-semibold">+91 63521 04371</span>
            </a>
            <Link href="/contact-us">
              <Button className="bg-dental-teal hover:bg-dental-teal-dark text-white">
                Book Appointment
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block py-2 text-foreground hover:text-dental-teal transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="block py-2 text-foreground hover:text-dental-teal transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>

            <div>
              <button
                onClick={() => setIsMobileTreatmentsOpen(!isMobileTreatmentsOpen)}
                className="flex items-center justify-between w-full py-2 text-foreground hover:text-dental-teal transition-colors font-medium"
              >
                Treatments
                <ChevronDown className={`w-4 h-4 transition-transform ${isMobileTreatmentsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMobileTreatmentsOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    href="/treatments"
                    className="block py-2 text-sm text-dental-teal font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    All Treatments
                  </Link>
                  {treatments.map((treatment) => (
                    <Link
                      key={treatment.slug}
                      href={`/treatments/${treatment.slug}`}
                      className="block py-2 text-sm text-foreground hover:text-dental-teal transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {treatment.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact-us"
              className="block py-2 text-foreground hover:text-dental-teal transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>

            <div className="pt-4 border-t">
              <a href="tel:+916352104371" className="flex items-center text-dental-teal mb-3">
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-semibold">+91 63521 04371</span>
              </a>
              <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-dental-teal hover:bg-dental-teal-dark text-white">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
