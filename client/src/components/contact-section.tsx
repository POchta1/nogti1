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

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

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
        title: "Заявка отправлена!",
        description: "Я свяжусь с вами в течение часа для подтверждения записи.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/bookings"] });
    },
    onError: () => {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте еще раз.",
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
            Контакты
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Свяжитесь со мной для записи на прием или консультации
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Information */}
          <div>
            <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-8">
              Информация для связи
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-dusty-rose rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Адрес</h4>
                  <p className="text-gray-600">
                    г. Москва, ул. Арбат, 12
                    <br />
                    студия красоты "Элегант"
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-dusty-rose rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Телефон</h4>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-dusty-rose rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Время работы</h4>
                  <p className="text-gray-600">
                    Пн-Пт: 10:00 - 20:00
                    <br />
                    Сб-Вс: 11:00 - 19:00
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-dusty-rose rounded-full flex items-center justify-center flex-shrink-0">
                  <Instagram className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Instagram</h4>
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
                Социальные сети
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
              Запись на прием
            </h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ваше имя</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Введите ваше имя"
                          className="rounded-2xl border-2 focus:border-dusty-rose"
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
                      <FormLabel>Телефон</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="+7 (___) ___-__-__"
                          className="rounded-2xl border-2 focus:border-dusty-rose"
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
                      <FormLabel>Услуга</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="rounded-2xl border-2 focus:border-dusty-rose">
                            <SelectValue placeholder="Выберите услугу" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="classic">Классический маникюр</SelectItem>
                          <SelectItem value="nail-art">Nail Art</SelectItem>
                          <SelectItem value="extension">Наращивание</SelectItem>
                          <SelectItem value="spa">SPA-уход</SelectItem>
                          <SelectItem value="french">Французский маникюр</SelectItem>
                          <SelectItem value="gel">Покрытие гель-лаком</SelectItem>
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
                      <FormLabel>Предпочтительная дата</FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          className="rounded-2xl border-2 focus:border-dusty-rose"
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
                      <FormLabel>Дополнительные пожелания</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Расскажите о ваших пожеланиях к дизайну..."
                          className="rounded-2xl border-2 focus:border-dusty-rose resize-none"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={bookingMutation.isPending}
                  className="w-full bg-gradient-to-r from-dusty-rose to-warm-gold text-white py-3 rounded-2xl font-medium hover:from-dusty-rose/90 hover:to-warm-gold/90 transition-all transform hover:scale-105 shadow-lg"
                >
                  {bookingMutation.isPending ? "Отправляем..." : "Отправить заявку"}
                </Button>
              </form>
            </Form>

            <p className="text-sm text-gray-500 mt-4 text-center">
              Я свяжусь с вами в течение часа для подтверждения записи
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
