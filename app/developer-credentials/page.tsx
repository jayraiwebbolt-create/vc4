import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight } from '@/components/icons';

export default function DeveloperCredentials() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-dental-blue-light via-white to-dental-gray-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Website credits
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              This website was designed and developed by{' '}
              <span className="text-foreground font-semibold">Aayush Bajpai</span>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-none shadow-xl bg-gradient-to-br from-white to-dental-blue-light overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center space-y-8">
              <div className="w-16 h-16 bg-dental-teal rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Developer
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                  For the official portfolio and contact information, visit{' '}
                  <span className="text-foreground font-medium">aayushbajpai.com</span>.
                </p>
                <p className="text-sm text-muted-foreground">
                  Built for Vakharia Multispeciality Dental Clinic, Ahmedabad.
                </p>
              </div>
              <div>
                <Button asChild size="lg" className="bg-dental-teal hover:bg-dental-teal/90 text-white gap-2">
                  <a
                    href="https://aayushbajpai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit aayushbajpai.com
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
