import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertBookingSchema, type InsertBooking } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  const form = useForm<InsertBooking>({
    resolver: zodResolver(insertBookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: "",
      preferredDate: "",
      message: "",
    },
  });

  const bookingMutation = useMutation({
    mutationFn: async (booking: InsertBooking) => {
      const response = await apiRequest("POST", "/api/bookings", booking);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: t('requestSent'),
        description: t('requestSentDesc'),
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/bookings"] });
    },
    onError: () => {
      toast({
        title: t('error'),
        description: t('requestError'),
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertBooking) => {
    bookingMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t('contactTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('contactDescription')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Information */}
          <div>
            <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-8">
              {t('contactInfo')}
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-dusty-rose rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">{t('address')}</h4>
                  <p className="text-gray-600">
                    {t('addressText')}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-dusty-rose rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">{t('phone')}</h4>
                  <p className="text-gray-600">+43 664 93020595</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-dusty-rose rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">{t('workingHours')}</h4>
                  <p className="text-gray-600">
                    {t('workingHoursText')}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-dusty-rose rounded-full flex items-center justify-center flex-shrink-0">
                  <Instagram className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">{t('instagram')}</h4>
                  <a
                    href="https://www.instagram.com/solo.miia_nail/"
                    className="text-dusty-rose hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @solo.miia_nail
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-playfair text-xl font-bold text-gray-800 mb-4">
                {t('socialMedia')}
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/solo.miia_nail/"
                  className="w-12 h-12 bg-gradient-to-br from-dusty-rose to-warm-gold rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-8">
              {t('bookingTitle')}
            </h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('yourName')}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t('enterName')}
                          className="rounded-2xl border-2 focus:border-yellow-500 hover:border-yellow-400 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('phone')}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="+43 (___) ___-____"
                          className="rounded-2xl border-2 focus:border-yellow-500 hover:border-yellow-400 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('service')}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="rounded-2xl border-2 focus:border-yellow-500 hover:border-yellow-400 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300">
                            <SelectValue placeholder={t('selectService')} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="classic">{t('classicManicure')}</SelectItem>
                          <SelectItem value="nail-art">{t('nailArt')}</SelectItem>
                          <SelectItem value="extension">{t('extension')}</SelectItem>
                          <SelectItem value="spa">{t('spaCare')}</SelectItem>
                          <SelectItem value="french">{t('frenchManicure')}</SelectItem>
                          <SelectItem value="gel">{t('gelCoating')}</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="preferredDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('preferredDate')}</FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          className="rounded-2xl border-2 focus:border-yellow-500 hover:border-yellow-400 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('additionalWishes')}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t('designWishes')}
                          className="rounded-2xl border-2 focus:border-yellow-500 hover:border-yellow-400 focus:ring-2 focus:ring-yellow-500/20 resize-none transition-all duration-300"
                          rows={4}
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={bookingMutation.isPending}
                  className="w-full bg-black text-white py-3 rounded-2xl font-medium hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-700 hover:shadow-lg hover:shadow-yellow-500/30 hover:scale-105 transition-all duration-300"
                >
                  {bookingMutation.isPending ? t('sending') : t('sendRequest')}
                </Button>
              </form>
            </Form>

            <p className="text-sm text-gray-500 mt-4 text-center">
              {t('contactConfirmation')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
