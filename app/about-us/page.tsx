import { Card, CardContent } from '@/components/ui/card';
import CTASection from '@/components/CTASection';
import { Award, Heart, Users, Target, CheckCircle2, Shield, Sparkles, Activity } from '@/components/icons';

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-dental-blue-light via-white to-dental-gray-light py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Modern dental clinic"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-dental-blue-light/90 via-white/95 to-dental-gray-light/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Welcome to Vakharia Multispeciality Dental Clinic
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              With a legacy of over 55+ years, we have been a trusted name in dental care in Ahmedabad, built on a strong foundation of ethical practice, affordability, and clinical excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Legacy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The clinic was originally established by Dr. Deepak Vakharia and has built a strong reputation for providing quality dental care to generations of families.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, the practice is led by Dr. Deepak M. Vakharia, Dental Surgeon, and Dr. Palak D. Vakharia, Dental Surgeon (Graduate – 2002), supported by a team of multispecialist dental experts. We offer comprehensive dental treatments under one roof.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <div className="text-4xl font-bold text-dental-teal mb-2">55+</div>
                  <p className="text-muted-foreground">Years of Excellence</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-dental-teal mb-2">10000s</div>
                  <p className="text-muted-foreground">Successful Treatments</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-96">
              <img
                src="/office/IMG_3578.jpg"
                alt="Vakharia Dental Clinic office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dental-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Specialty
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive multispecialty dental care with expert specialists across all disciplines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-dental-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-dental-teal" />
                </div>
                <h3 className="text-lg font-semibold mb-2">General Dentist</h3>
                <p className="text-sm text-muted-foreground">B.D.S.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-dental-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-dental-teal" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Periodontist</h3>
                <p className="text-sm text-muted-foreground">M.D.S.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-dental-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-dental-teal" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Oral Surgeon</h3>
                <p className="text-sm text-muted-foreground">M.D.S.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-dental-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-dental-teal" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Implantologist</h3>
                <p className="text-sm text-muted-foreground">M.D.S.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-dental-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-dental-teal" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Prosthodontist</h3>
                <p className="text-sm text-muted-foreground">M.D.S.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-dental-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-dental-teal" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Pedodontist</h3>
                <p className="text-sm text-muted-foreground">M.D.S.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-dental-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-dental-teal" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Orthodontist</h3>
                <p className="text-sm text-muted-foreground">M.D.S.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-dental-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-dental-teal" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Endodontist</h3>
                <p className="text-sm text-muted-foreground">M.D.S.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A timeline of growth, trust, and commitment to excellence in dental care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-dental-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-dental-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">55+ Years</h3>
                <p className="text-muted-foreground">Clinical excellence</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-dental-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-dental-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Clinic 1</h3>
                <p className="text-muted-foreground">Established in Maninagar</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-dental-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-dental-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Clinic 2</h3>
                <p className="text-muted-foreground">Established in Paldi</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-dental-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-dental-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Thousands</h3>
                <p className="text-muted-foreground">Successful treatments</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-dental-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-dental-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Generations</h3>
                <p className="text-muted-foreground">Family patients</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-dental-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-dental-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Multispecialty</h3>
                <p className="text-muted-foreground">Expert team</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Doctors
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your dental health and well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-dental-blue-light">
                  <img
                    src="/Dr_Deepak_Vakharia.png"
                    alt="Dr. Deepak M. Vakharia"
                    className="w-full h-full object-cover object-[55%_35%]"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Dr. Deepak M. Vakharia</h3>
                <p className="text-dental-teal font-medium mb-4">Dental Surgeon</p>
                <p className="text-muted-foreground leading-relaxed">
                  Leading the practice with decades of experience and a commitment to ethical dental care.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-dental-blue-light">
                  <img
                    src="/Dr_Palak_Vakharia.jpg"
                    alt="Dr. Palak D. Vakharia"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Dr. Palak D. Vakharia</h3>
                <p className="text-dental-teal font-medium mb-4">Dental Surgeon (Graduate – 2002)</p>
                <p className="text-muted-foreground leading-relaxed">
                  Bringing modern expertise and compassionate care to continue our family legacy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-dental-blue-light">
                  <img
                    src="/WhatsApp_Image_2026-03-12_at_11.34.43_AM_(1).jpeg"
                    alt="Dr. Jaldhi Sanghvi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Dr. Jaldhi Sanghvi</h3>
                <p className="text-dental-teal font-medium mb-4">General Dentist Surgeon</p>
                <p className="text-muted-foreground leading-relaxed">
                  Dedicated to providing comprehensive general dental care with a gentle, patient-centered approach.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-dental-blue-light">
                  <img
                    src="/Dr_Aarushi_Rastogi.jpeg"
                    alt="Dr. Aarushi Rastogi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Dr. Aarushi Rastogi</h3>
                <p className="text-dental-teal font-medium mb-4">Dental Specialist</p>
                <p className="text-muted-foreground leading-relaxed">
                  Committed to delivering exceptional dental care with precision and compassion.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-dental-blue-light">
                  <img
                    src="/Dr_Nihita_Vaja.jpeg"
                    alt="Dr. Nihita Vaja"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Dr. Nihita Vaja</h3>
                <p className="text-dental-teal font-medium mb-4">Dental Specialist</p>
                <p className="text-muted-foreground leading-relaxed">
                  Providing expert dental care with a focus on patient comfort and satisfaction.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-dental-blue-light">
                  <img
                    src="/new-doctors/IMG_3622.jpg"
                    alt="Dr. Jolly Shah"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Dr. Jolly Shah</h3>
                <p className="text-dental-teal font-medium mb-4">Dental Specialist</p>
                <p className="text-muted-foreground leading-relaxed">
                  Dedicated to providing quality dental care with expertise and compassion.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-dental-blue-light">
                  <img
                    src="/new-doctors/IMG_3648.jpg"
                    alt="Dr. Kushik Sutariya"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Dr. Kushik Sutariya</h3>
                <p className="text-dental-teal font-medium mb-4">Dental Specialist</p>
                <p className="text-muted-foreground leading-relaxed">
                  Committed to delivering excellent dental care with a patient-centered approach.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-dental-blue-light">
                  <img
                    src="/new-doctors/IMG_7366.JPG.jpeg"
                    alt="Dr. Moksha"
                    className="w-full h-full object-cover object-[center_25%]"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Dr. Moksha</h3>
                <p className="text-dental-teal font-medium mb-4">Dental Specialist</p>
                <p className="text-muted-foreground leading-relaxed">
                  Providing expert dental care with precision and a focus on patient well-being.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dental-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Philosophy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The core values that guide every treatment and patient interaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-dental-blue-light rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-7 h-7 text-dental-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Ethical Treatment Planning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We prioritize your well-being over unnecessary treatments, providing honest recommendations you can trust.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-dental-blue-light rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 text-dental-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Affordable Pricing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Quality dental care should be accessible to all. We offer competitive pricing without compromising excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-dental-blue-light rounded-full flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-dental-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Specialist Consultation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Access to multispecialist dental experts ensures you receive the best care for every dental need.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-dental-blue-light rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="w-7 h-7 text-dental-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Modern Technology</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We utilize advanced equipment and techniques to provide precise, comfortable, and effective treatments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-dental-blue-light rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 text-dental-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Patient Comfort Focus</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your comfort and peace of mind are paramount in every appointment and procedure.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-dental-blue-light rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-7 h-7 text-dental-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Clinical Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Maintaining the highest standards of care through continuous learning and best practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTASection
        title="Experience the Vakharia Difference"
        description="Join generations of families who trust us with their smiles. Schedule your appointment today and become part of our 55+ year legacy."
      />
    </div>
  );
}
