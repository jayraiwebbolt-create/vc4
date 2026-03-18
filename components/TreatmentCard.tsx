import { Link } from '@/lib/next-compat';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from '@/components/icons';
import React from 'react';

interface TreatmentCardProps {
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
  slug: string;
}

export default function TreatmentCard({ icon: Icon, title, description, slug }: TreatmentCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-none bg-white h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="w-16 h-16 bg-gradient-to-br from-dental-blue-light to-white rounded-2xl flex items-center justify-center mb-4 group-hover:from-dental-teal group-hover:to-dental-teal-light transition-all">
          <Icon className="w-8 h-8 text-dental-teal group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">{description}</p>
        <Link href={`/treatments/${slug}`}>
          <Button variant="ghost" className="group/btn p-0 h-auto text-dental-teal hover:text-dental-teal-dark hover:bg-transparent">
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
