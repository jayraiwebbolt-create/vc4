import { useParams, Navigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import CTASection from '@/components/CTASection';
import { CheckCircle2 } from '@/components/icons';
import { treatmentsData } from '@/lib/treatmentData';

export default function TreatmentDetail() {
  const { slug } = useParams<{ slug: string }>();
  const treatment = slug ? treatmentsData[slug] : undefined;

  if (!treatment) {
    return <Navigate to="/treatments" replace />;
  }

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
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {treatment.title}
            </h1>
            <p className="text-2xl text-white/90 font-semibold">{treatment.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">Treatment Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{treatment.overview}</p>
        </div>
      </section>

      <section className="py-20 bg-dental-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatment.benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-md bg-white">
                <CardContent className="p-6 flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-dental-teal flex-shrink-0 mt-1" />
                  <p className="text-foreground leading-relaxed">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">{treatment.procedure.title}</h2>
          <div className="space-y-6">
            {treatment.procedure.steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-dental-teal text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-grow pt-2">
                  <p className="text-lg text-foreground leading-relaxed">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {treatment.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-dental-gray-light rounded-lg px-6 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-dental-teal py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection
        title={`Ready to Learn More About ${treatment.title}?`}
        description="Schedule a consultation with our experienced team to discuss your treatment options and get all your questions answered."
      />
    </div>
  );
}
