import { Link } from '@/lib/next-compat.tsx';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AppointmentForm from '@/components/AppointmentForm';
import ServiceCard from '@/components/ServiceCard';
import TreatmentCard from '@/components/TreatmentCard';
import CTASection from '@/components/CTASection';
import {
  Smile,
  Shield,
  Award,
  Clock,
  Heart,
  Sparkles,
  Stethoscope,
  Scissors,
  CircleDot,
  AlignVerticalSpaceAround,
  Star,
  Quote,
} from '@/components/icons';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-dental-blue-light via-white to-dental-gray-light py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Smile Deserves{' '}
                <span className="text-dental-teal">Premium Care</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Experience exceptional dental care with specialized dental implant treatments, skilled professionals, and a compassionate approach to restoring your smile
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact-us">
                  <Button size="lg" className="bg-dental-teal hover:bg-dental-teal-dark text-white px-8">
                    Book Appointment
                  </Button>
                </Link>
                <Link href="/treatments">
                  <Button size="lg" variant="outline" className="border-dental-teal text-dental-teal hover:bg-dental-blue-light">
                    View Treatments
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-dental-teal mb-1">55+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center border-x border-gray-200">
                  <div className="text-2xl sm:text-3xl font-bold text-dental-teal mb-1">1 Lakh+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-dental-teal mb-1">2</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Clinic Locations</div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Dental Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From routine care to advanced treatments, we offer everything you need for a healthy, beautiful smile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={CircleDot}
              title="Implant Dentistry"
              description="Permanent tooth replacement solutions with natural-looking dental implants."
            />
            <ServiceCard
              icon={Stethoscope}
              title="Restorative Care"
              description="Restore function and aesthetics with implants, crowns, and bridges."
            />
            <ServiceCard
              icon={Shield}
              title="Preventive Care"
              description="Keep your teeth healthy with regular cleanings and checkups."
            />
            <ServiceCard
              icon={Sparkles}
              title="Advanced Technology"
              description="Experience modern dentistry with cutting-edge equipment and techniques."
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-dental-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Vakharia Dental
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine expertise, technology, and genuine care to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-dental-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-dental-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert Dentists</h3>
                <p className="text-muted-foreground">
                  Our highly qualified team brings years of experience and continuous training in the latest techniques.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-dental-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-dental-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Flexible Scheduling</h3>
                <p className="text-muted-foreground">
                  We offer convenient appointment times including evenings and weekends to fit your busy lifestyle.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-dental-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-dental-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Patient-Centered Care</h3>
                <p className="text-muted-foreground">
                  Your comfort and satisfaction are our top priorities. We listen, explain, and care.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Full Range of Treatments
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive treatment options designed for every dental need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TreatmentCard
              icon={CircleDot}
              title="Dental Implants"
              description="Permanent solution for missing teeth with natural-looking results."
              slug="dental-implants"
            />
            <TreatmentCard
              icon={Shield}
              title="Root Canal Treatments"
              description="Save infected teeth with painless, modern endodontic care."
              slug="root-canal-treatments"
            />
            <TreatmentCard
              icon={Sparkles}
              title="Ceramic Crowns & Bridges"
              description="Restore broken or missing teeth with natural-looking restorations."
              slug="ceramic-crowns-bridges"
            />
            <TreatmentCard
              icon={Smile}
              title="Veneers & Smile Design"
              description="Transform your smile with custom porcelain veneers."
              slug="veneers-smile-designing"
            />
            <TreatmentCard
              icon={Scissors}
              title="Wisdom Tooth Surgery"
              description="Safe and comfortable extraction procedures for wisdom teeth."
              slug="wisdom-tooth-surgery"
            />
            <TreatmentCard
              icon={AlignVerticalSpaceAround}
              title="Invisalign"
              description="Straighten your teeth discreetly with clear aligners."
              slug="invisalign"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/treatments">
              <Button size="lg" className="bg-dental-teal hover:bg-dental-teal-dark text-white">
                View All Treatments
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-dental-blue-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Proven Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a systematic process to ensure the best outcomes for every patient.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Consultation',
                description: 'Comprehensive examination and discussion of your dental goals.',
              },
              {
                number: '02',
                title: 'Diagnosis',
                description: 'Advanced imaging and analysis to create your personalized plan.',
              },
              {
                number: '03',
                title: 'Treatment',
                description: 'Expert care using the latest techniques and technology.',
              },
              {
                number: '04',
                title: 'Follow-Up',
                description: 'Ongoing support to maintain your beautiful, healthy smile.',
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-dental-teal text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dental-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Clinic Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A glimpse into our modern facilities and the care we provide at Vakharia Dental.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
            {[
              'IMG_3535',
              'IMG_3537',
              'IMG_3540',
              'IMG_3543',
              'IMG_3544',
              'IMG_3546',
              'IMG_3548',
              'IMG_3550',
              'IMG_3561',
              'IMG_3570',
              'IMG_3571',
              'IMG_3578',
              'IMG_3610',
              'IMG_3645',
              'IMG_3651',
            ].map((name) => (
              <div
                key={name}
                className="group relative aspect-square overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:border-dental-teal/40"
              >
                <img
                  src={`/news/${name}.jpg`}
                  alt={`Vakharia Dental Clinic - ${name}`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from real patients who trust us with their smiles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                treatment: 'Dental Implants',
                rating: 5,
                text: 'The team at Vakharia Dental transformed my smile with dental implants. The process was smooth, painless, and the results exceeded my expectations. I can smile confidently again!',
              },
              {
                name: 'Rahul Patel',
                treatment: 'Invisalign',
                rating: 5,
                text: 'I never thought I could straighten my teeth without braces. Invisalign was perfect for my lifestyle, and the staff made every visit comfortable and informative.',
              },
              {
                name: 'Anjali Desai',
                treatment: 'Veneers & Smile Design',
                rating: 5,
                text: 'Professional, caring, and the results are amazing! My smile transformation with veneers exceeded all expectations. I received so many compliments. Highly recommend Vakharia Dental!',
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg bg-white">
                <CardContent className="p-6">
                  <Quote className="w-10 h-10 text-dental-teal mb-4" />
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-dental-teal text-dental-teal" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{testimonial.text}</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.treatment}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Smile?"
        description="Book your consultation today and take the first step towards a healthier, more confident smile."
      />
    </div>
  );
}
