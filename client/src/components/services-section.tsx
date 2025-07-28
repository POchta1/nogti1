import { useQuery } from "@tanstack/react-query";
import { 
  HandHeart, 
  Palette, 
  Gem, 
  Sparkles, 
  Heart, 
  Waves,
  Clock,
  ArrowRight
} from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useCallback } from 'react';
import type { Service } from "@shared/schema";

const iconMap = {
  "hand-sparkles": HandHeart,
  "palette": Palette,
  "gem": Gem,
  "spa": Waves,
  "heart": Heart,
  "sparkles": Sparkles,
};

export default function ServicesSection() {
  const { data: services = [], isLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    dragFree: true,
    containScroll: 'trimSnaps'
  });

  // Auto-scroll functionality for infinite slow movement
  const autoScroll = useCallback(() => {
    if (!emblaApi) return;
    
    const scrollNext = () => {
      emblaApi.scrollNext();
    };

    const interval = setInterval(scrollNext, 3000); // Move every 3 seconds
    return () => clearInterval(interval);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const cleanup = autoScroll();
    return cleanup;
  }, [emblaApi, autoScroll]);

  // Duplicate services for infinite scroll effect
  const infiniteServices = services.length > 0 ? [...services, ...services, ...services] : [];

  if (isLoading) {
    return (
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="animate-pulse space-y-4">
              <div className="h-12 bg-gray-200 rounded w-48 mx-auto" />
              <div className="h-6 bg-gray-200 rounded w-96 mx-auto" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse bg-gray-100 rounded-3xl p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-2xl mb-6" />
                <div className="h-6 bg-gray-200 rounded mb-4" />
                <div className="h-4 bg-gray-200 rounded mb-2" />
                <div className="h-4 bg-gray-200 rounded mb-6" />
                <div className="flex justify-between">
                  <div className="h-6 bg-gray-200 rounded w-20" />
                  <div className="h-4 bg-gray-200 rounded w-16" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-100 px-6 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Услуги</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Что я предлагаю
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональные услуги nail-арта с использованием премиальных материалов 
            и индивидуальным подходом к каждому клиенту
          </p>
        </div>

        {/* Services Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {infiniteServices.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Sparkles;
              // Make every 3rd item appear larger for better visual effect
              const isCenter = index % 3 === 1;
              
              return (
                <div
                  key={`${service.id}-${index}`}
                  className={`flex-none mx-4 transition-all duration-700 ${
                    isCenter 
                      ? 'w-80 md:w-96 scale-110 z-10' 
                      : 'w-72 md:w-80 scale-95 opacity-75'
                  }`}
                  style={{ minWidth: isCenter ? '320px' : '280px' }}
                >
                  <div className="group relative bg-white border border-gray-100 rounded-3xl p-6 md:p-8 hover:shadow-2xl hover:border-gray-200 transition-all duration-500 h-full">
                    {/* Popular badge for center service */}
                    {isCenter && (
                      <div className="absolute -top-3 left-8">
                        <span className="bg-elegant-gold text-white text-xs font-bold px-3 py-1 rounded-full">
                          В центре внимания
                        </span>
                      </div>
                    )}
                    
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className={`bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 ${
                        isCenter ? 'w-20 h-20' : 'w-16 h-16'
                      }`}>
                        <IconComponent className="text-white" size={isCenter ? 32 : 28} />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-elegant-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className={`font-bold text-black mb-4 group-hover:text-gray-700 transition-colors ${
                        isCenter ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
                      }`}>
                        {service.name}
                      </h3>
                      <p className={`text-gray-600 mb-6 leading-relaxed ${
                        isCenter ? 'text-base' : 'text-sm'
                      }`}>
                        {service.description}
                      </p>
                      
                      {/* Price and Duration */}
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center justify-between">
                          <span className={`font-bold text-black ${
                            isCenter ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'
                          }`}>
                            {service.price}
                          </span>
                          <div className="flex items-center space-x-2 text-gray-500">
                            <Clock size={16} />
                            <span className={isCenter ? 'text-base' : 'text-sm'}>
                              {service.duration}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button
                        onClick={() => {
                          const element = document.getElementById("contact");
                          if (element) element.scrollIntoView({ behavior: "smooth" });
                        }}
                        className={`w-full bg-black text-white rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 group/button ${
                          isCenter ? 'py-4 px-8 text-base' : 'py-3 px-6 text-sm'
                        }`}
                      >
                        <span>Записаться</span>
                        <ArrowRight size={isCenter ? 18 : 16} className="group-hover/button:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">
              Не знаете, что выбрать?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Запишитесь на бесплатную консультацию, и мы вместе подберем идеальный вариант 
              для ваших ногтей с учетом всех пожеланий
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors font-medium"
            >
              Получить консультацию
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
