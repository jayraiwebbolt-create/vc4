import { Link } from '@/lib/next-compat';
import { MapPin, Facebook, Instagram, Twitter } from '@/components/icons';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <div className="h-16 w-56 sm:w-64 md:w-77">
                <img
                  src="/3.png"
                  alt="Vakharia Multispeciality Dental Clinic"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              With 55+ years of legacy, providing ethical, affordable, and excellent dental care in Ahmedabad.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-dental-teal transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-slate-300 hover:text-dental-teal transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="text-slate-300 hover:text-dental-teal transition-colors text-sm">
                  Treatments
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-slate-300 hover:text-dental-teal transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Treatments</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/treatments/dental-implants" className="text-slate-300 hover:text-dental-teal transition-colors text-sm">
                  Dental Implants
                </Link>
              </li>
              <li>
                <Link href="/treatments/root-canal-treatments" className="text-slate-300 hover:text-dental-teal transition-colors text-sm">
                  Root Canal Treatments
                </Link>
              </li>
              <li>
                <Link href="/treatments/veneers-smile-designing" className="text-slate-300 hover:text-dental-teal transition-colors text-sm">
                  Veneers & Smile Design
                </Link>
              </li>
              <li>
                <Link href="/treatments/ceramic-crowns-bridges" className="text-slate-300 hover:text-dental-teal transition-colors text-sm">
                  Crowns & Bridges
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-dental-teal flex-shrink-0 mt-0.5" />
                <div className="text-slate-300 text-sm">
                  <p className="font-semibold mb-1">Maninagar</p>
                  <p className="mb-1">Kankaria Road, Ahmedabad</p>
                  <div className="flex flex-col space-y-0.5">
                    <a href="tel:07925326716" className="hover:text-dental-teal transition-colors">
                      079 25326716
                    </a>
                    <a href="tel:+916352104371" className="hover:text-dental-teal transition-colors">
                      63521 04371
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-dental-teal flex-shrink-0 mt-0.5" />
                <div className="text-slate-300 text-sm">
                  <p className="font-semibold mb-1">Paldi</p>
                  <p className="mb-1">New Vikas Gruh Road, Ahmedabad</p>
                  <div className="flex flex-col space-y-0.5">
                    <a href="tel:07926609368" className="hover:text-dental-teal transition-colors">
                      079 2660 9368
                    </a>
                    <a href="tel:+918320048376" className="hover:text-dental-teal transition-colors">
                      83200 48376
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Vakharia Multispeciality Dental Clinic. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-dental-teal transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-dental-teal transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-dental-teal transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="text-center pt-4 border-t border-slate-800">
            <p className="text-slate-400 text-sm">
              Developed by{' '}
              <a
                href="https://www.aayushbajpai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dental-teal hover:text-dental-teal-light transition-colors font-medium"
              >
                Aayush Bajpai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
