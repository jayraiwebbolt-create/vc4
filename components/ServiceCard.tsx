import { Card, CardContent } from '@/components/ui/card';
import React from 'react';

interface ServiceCardProps {
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-none bg-white">
      <CardContent className="p-6">
        <div className="w-14 h-14 bg-dental-blue-light rounded-full flex items-center justify-center mb-4 group-hover:bg-dental-teal transition-colors">
          <Icon className="w-7 h-7 text-dental-teal group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
