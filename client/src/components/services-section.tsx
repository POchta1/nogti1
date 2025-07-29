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
import { openWhatsAppBooking, openWhatsAppConsultation } from "@/lib/whatsapp-utils";
import { useTranslation } from "@/hooks/use-translation";

const iconMap = {
  "hand-sparkles": HandHeart,
  "palette": Palette,
  "gem": Gem,
  "spa": Waves,
  "heart": Heart,
  "sparkles": Sparkles,
};

interface ServiceData {
  id: string;
  nameKey: string;
  descKey: string;
  price: string;
  duration: string;
  icon: keyof typeof iconMap;
}

const servicesData: ServiceData[] = [
  {
    id: 'classic-manicure',
    nameKey: 'classicManicure',
    descKey: 'classicManicureDesc',
    price: '25€',
    duration: '1.5',
    icon: 'hand-sparkles'
  },
  {
    id: 'nail-art',
    nameKey: 'nailArt',
    descKey: 'nailArtDesc',
    price: '35€',
    duration: '2-3',
    icon: 'palette'
  },
  {
    id: 'extension',
    nameKey: 'extension',
    descKey: 'extensionDesc',
    price: 'от 60€',
    duration: '2.5',
    icon: 'gem'
  },
  {
    id: 'french-manicure',
    nameKey: 'frenchManicure',
    descKey: 'frenchManicureDesc',
    price: '28€',
    duration: '1.5',
    icon: 'heart'
  },
  {
    id: 'gel-coating',
    nameKey: 'gelCoating',
    descKey: 'gelCoatingDesc',
    price: 'от 45€',
    duration: '1',
    icon: 'sparkles'
  }
];

export default function ServicesSection() {
  const { t, language } = useTranslation();



  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-100 px-6 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">{t('servicesSubtitle')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            {t('servicesTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('servicesDescription')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto">
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {servicesData.slice(0, 3).map((service) => {
              const IconComponent = iconMap[service.icon];
              
              return (
                <div
                  key={service.id}
                  className="group bg-gray-50 border-2 border-transparent hover:border-yellow-500 p-6 rounded-3xl transition-all duration-500 hover:shadow-xl hover:shadow-yellow-500/20 hover:-translate-y-2 cursor-pointer flex flex-col h-full"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <IconComponent className="text-white" size={28} />
                  </div>

                  {/* Service Info */}
                  <h3 className="text-xl font-bold text-black mb-4 group-hover:text-yellow-600 transition-colors duration-500">
                    {t(service.nameKey)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {t(service.descKey)}
                  </p>

                  {/* Price and Duration */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-2xl font-bold text-black group-hover:text-yellow-600 transition-colors duration-500">
                      {t('from')} {service.price}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock size={14} className="mr-1" />
                      {service.duration} час{service.duration.includes('-') || parseFloat(service.duration) > 1 ? 'а' : ''}
                    </div>
                  </div>

                  {/* Book Button */}
                  <button
                    onClick={() => openWhatsAppBooking(language, t(service.nameKey))}
                    className="w-full bg-black text-white py-3 rounded-2xl font-medium hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-500/30 hover:scale-105 transition-all duration-500 flex items-center justify-center group"
                  >
                    {t('bookService')}
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
          
          {/* Second row - 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {servicesData.slice(3, 5).map((service) => {
            const IconComponent = iconMap[service.icon];
            
            return (
              <div
                key={service.id}
                className="group bg-gray-50 border-2 border-transparent hover:border-yellow-500 p-6 rounded-3xl transition-all duration-500 hover:shadow-xl hover:shadow-yellow-500/20 hover:-translate-y-2 cursor-pointer flex flex-col h-full"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <IconComponent className="text-white" size={28} />
                </div>

                {/* Service Info */}
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-yellow-600 transition-colors duration-500">
                  {t(service.nameKey)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {t(service.descKey)}
                </p>

                {/* Price and Duration */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-2xl font-bold text-black group-hover:text-yellow-600 transition-colors duration-500">
                    {t('from')} {service.price}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock size={14} className="mr-1" />
                    {service.duration} час{service.duration.includes('-') || parseFloat(service.duration) > 1 ? 'а' : ''}
                  </div>
                </div>

                {/* Book Button */}
                <button
                  onClick={() => openWhatsAppBooking(language, t(service.nameKey))}
                  className="w-full bg-black text-white py-3 rounded-2xl font-medium hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-500/30 hover:scale-105 transition-all duration-500 flex items-center justify-center group"
                >
                  {t('bookService')}
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">
              {t('consultationTitle')}
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {t('consultationDescription')}
            </p>
            <button
              onClick={() => openWhatsAppConsultation(language)}
              className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors font-medium"
            >
              {t('getConsultation')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
