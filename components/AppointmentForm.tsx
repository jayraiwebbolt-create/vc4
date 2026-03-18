'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/icons';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappMessage = `Hi, I would like to book an appointment.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0APreferred Date: ${formData.date}%0AMessage: ${formData.message || 'None'}`;

    window.open(`https://wa.me/916352104371?text=${whatsappMessage}`, '_blank');

    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      message: '',
    });

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Card className="border-none shadow-xl">
      <CardHeader className="bg-gradient-to-br from-dental-blue-light to-white">
        <CardTitle className="text-2xl font-bold text-foreground">Book an Appointment</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Rajesh Kumar"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="rajesh@example.com"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+91 98765 43210"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="date">Preferred Date *</Label>
            <div className="relative mt-1">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="pl-10"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="message">Message (Optional)</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your dental concerns..."
              className="mt-1 min-h-[100px]"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-dental-teal hover:bg-dental-teal-dark text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Opening WhatsApp...' : 'Book Appointment'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
