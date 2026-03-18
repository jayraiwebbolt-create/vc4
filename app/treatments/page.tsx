import TreatmentCard from '@/components/TreatmentCard';
import CTASection from '@/components/CTASection';
import {
  CircleDot,
  AlignVerticalSpaceAround,
  Shield,
  Crown,
  Scissors,
  Activity,
  Smile,
  Brush,
  FileText,
  UsersRound,
  Moon,
} from '@/components/icons';

const treatments = [
  {
    icon: CircleDot,
    title: 'Dental Implants',
    description: 'Permanent, natural-looking solution for missing teeth. Restore your smile with titanium implants that function like natural teeth.',
    slug: 'dental-implants',
  },
  {
    icon: AlignVerticalSpaceAround,
    title: 'Invisalign',
    description: 'Straighten your teeth discreetly with custom clear aligners. Comfortable, removable, and virtually invisible orthodontic treatment.',
    slug: 'invisalign',
  },
  {
    icon: Shield,
    title: 'Root Canal Treatments',
    description: 'Save infected or damaged teeth with modern, painless endodontic therapy. Advanced techniques ensure comfortable treatment.',
    slug: 'root-canal-treatments',
  },
  {
    icon: Crown,
    title: 'Ceramic Crowns & Bridges',
    description: 'Restore damaged teeth or replace missing ones with durable, natural-looking ceramic restorations.',
    slug: 'ceramic-crowns-bridges',
  },
  {
    icon: Scissors,
    title: 'Wisdom Tooth Surgery',
    description: 'Safe, comfortable extraction of wisdom teeth using modern surgical techniques for faster recovery.',
    slug: 'wisdom-tooth-surgery',
  },
  {
    icon: Activity,
    title: 'Gum Surgeries',
    description: 'Advanced periodontal procedures to treat gum disease and restore oral health. Minimally invasive techniques for faster healing.',
    slug: 'gum-surgeries',
  },
  {
    icon: Smile,
    title: 'Veneers & Smile Designing',
    description: 'Transform your smile with custom porcelain veneers. Comprehensive smile makeovers for stunning results.',
    slug: 'veneers-smile-designing',
  },
  {
    icon: Brush,
    title: 'Teeth Cleaning & Polishing',
    description: 'Professional dental cleanings to maintain oral health. Remove plaque, tartar, and stains for a fresh, healthy smile.',
    slug: 'teeth-cleaning-polishing',
  },
  {
    icon: FileText,
    title: 'Dental Fillings',
    description: 'Tooth-colored composite fillings to repair cavities. Durable, aesthetic restorations that blend naturally with your teeth.',
    slug: 'dental-fillings',
  },
  {
    icon: UsersRound,
    title: 'Dentures',
    description: 'Complete or partial dentures to restore function and aesthetics. Custom-fitted for comfort and natural appearance.',
    slug: 'dentures',
  },
  {
    icon: Moon,
    title: 'Night Guard',
    description: 'Custom night guards to protect teeth from grinding and clenching. Prevent wear and reduce jaw pain.',
    slug: 'night-guard',
  },
];

export default function Treatments() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/news/IMG_3537.jpg"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Treatments
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Comprehensive dental solutions tailored to your unique needs. From preventive care to advanced procedures, we're here to help you achieve optimal oral health.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment, index) => (
              <TreatmentCard
                key={index}
                icon={treatment.icon}
                title={treatment.title}
                description={treatment.description}
                slug={treatment.slug}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dental-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Not Sure Which Treatment is Right for You?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our experienced team will conduct a comprehensive examination and discuss your goals to recommend the best treatment plan for your needs.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Schedule Your Consultation Today"
        description="Let us help you find the perfect treatment to achieve the healthy, beautiful smile you deserve."
      />
    </div>
  );
}
