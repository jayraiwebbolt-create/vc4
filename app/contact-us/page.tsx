import { Card, CardContent } from '@/components/ui/card';
import AppointmentForm from '@/components/AppointmentForm';
import { MapPin, Phone, Building2 } from '@/components/icons';

export default function ContactUs() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-dental-blue-light via-white to-dental-gray-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Visit us at either of our two convenient locations in Ahmedabad. Our experienced team is ready to serve you with 55+ years of trusted dental care.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Our Clinics</h2>

                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-dental-blue-light mb-8">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-dental-teal rounded-full flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-2xl text-foreground mb-2">Clinic 1 – Maninagar</h3>
                        <p className="text-dental-teal font-semibold">Serving from 55+ years</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-dental-teal flex-shrink-0 mt-1" />
                        <div>
                          <a
                            href="tel:07925326716"
                            className="text-foreground hover:text-dental-teal transition-colors font-medium block"
                          >
                            079 2532 6716
                          </a>
                          <a
                            href="tel:+916352104371"
                            className="text-foreground hover:text-dental-teal transition-colors font-medium block"
                          >
                            +91 63521 04371
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-dental-teal flex-shrink-0 mt-1" />
                        <div className="text-muted-foreground leading-relaxed">
                          <p className="font-semibold text-foreground mb-1">Vakharia Multispeciality Dental Clinic</p>
                          <p>307, Third Floor, Sarovar Platinum</p>
                          <p>Opp. Madhyam Varg Society</p>
                          <p>Kankaria Road, Maninagar</p>
                          <p>Ahmedabad – 380022</p>
                          <p>Gujarat, India</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-dental-blue-light">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-dental-teal rounded-full flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-2xl text-foreground mb-2">Clinic 2 – Paldi</h3>
                        <p className="text-dental-teal font-semibold">Serving for 25+ Years</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-dental-teal flex-shrink-0 mt-1" />
                        <div>
                          <a
                            href="tel:07926609368"
                            className="text-foreground hover:text-dental-teal transition-colors font-medium block"
                          >
                            079 2660 9368
                          </a>
                          <a
                            href="tel:+918320048376"
                            className="text-foreground hover:text-dental-teal transition-colors font-medium block"
                          >
                            +91 83200 48376
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-dental-teal flex-shrink-0 mt-1" />
                        <div className="text-muted-foreground leading-relaxed">
                          <p className="font-semibold text-foreground mb-1">Vakharia Multispeciality Dental Clinic</p>
                          <p>Anisha Complex</p>
                          <p>New Vikas Gruh Road</p>
                          <p>Paldi</p>
                          <p>Ahmedabad – 380007</p>
                          <p>Gujarat, India</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dental-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Visit Either Location</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg bg-white overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-dental-blue-light to-dental-gray-light flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-dental-teal mx-auto mb-4" />
                  <p className="text-xl font-semibold text-foreground">Maninagar Clinic</p>
                  <p className="text-muted-foreground mt-2 px-4">Kankaria Road, Maninagar</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:07925326716"
                    className="inline-flex items-center justify-center px-6 py-3 bg-dental-teal hover:bg-dental-teal-dark text-white font-semibold rounded-lg transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    079 2532 6716
                  </a>
                  <a
                    href="tel:+916352104371"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-dental-teal text-dental-teal hover:bg-dental-blue-light font-semibold rounded-lg transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    +91 63521 04371
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-dental-blue-light to-dental-gray-light flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-dental-teal mx-auto mb-4" />
                  <p className="text-xl font-semibold text-foreground">Paldi Clinic</p>
                  <p className="text-muted-foreground mt-2 px-4">New Vikas Gruh Road, Paldi</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:07926609368"
                    className="inline-flex items-center justify-center px-6 py-3 bg-dental-teal hover:bg-dental-teal-dark text-white font-semibold rounded-lg transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    079 2660 9368
                  </a>
                  <a
                    href="tel:+918320048376"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-dental-teal text-dental-teal hover:bg-dental-blue-light font-semibold rounded-lg transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    +91 83200 48376
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Experience Quality Dental Care?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            With 55+ years of experience and two convenient locations in Ahmedabad, we're here to serve you with ethical, affordable, and excellent dental care.
          </p>
          <div className="bg-dental-blue-light rounded-xl p-8 inline-block">
            <p className="text-2xl font-bold text-dental-teal mb-2">Walk-ins Welcome</p>
            <p className="text-muted-foreground">Or call ahead to schedule your preferred time</p>
          </div>
        </div>
      </section>
    </div>
  );
}
