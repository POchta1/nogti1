import { Award, Tag, Star } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

export default function AboutSection() {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {t('aboutMaster')}
            </h2>
            <h3 className="text-2xl font-playfair text-elegant-gold mb-6">
              {t('masterName')}
            </h3>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                {t('aboutText1')}
              </p>

              <p>
                {t('aboutText2')}
              </p>

              <p>
                {t('aboutText3')}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-100 rounded-2xl hover:bg-gradient-to-br hover:from-yellow-50 hover:to-yellow-100 hover:shadow-lg hover:shadow-yellow-500/20 hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-elegant-gold font-playfair group-hover:animate-pulse">
                  500+
                </div>
                <div className="text-gray-600">{t('happyClients')}</div>
              </div>
              <div className="text-center p-4 bg-gray-100 rounded-2xl hover:bg-gradient-to-br hover:from-yellow-50 hover:to-yellow-100 hover:shadow-lg hover:shadow-yellow-500/20 hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-elegant-gold font-playfair group-hover:animate-pulse">
                  5
                </div>
                <div className="text-gray-600">{t('yearsExperience')}</div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-playfair text-xl font-bold text-gray-800 mb-4">
                {t('certificatesTitle')}
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <Tag className="text-warm-gold mr-3" size={20} />
                  {t('certifiedMaster')}
                </li>
                <li className="flex items-center">
                  <Award className="text-warm-gold mr-3" size={20} />
                  {t('contestWinner')}
                </li>
                <li className="flex items-center">
                  <Star className="text-warm-gold mr-3" size={20} />
                  {t('masterCategory')}
                </li>
              </ul>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/attached_assets/sfds (1) (1)_1753740944046.jpg"
                  alt="Портрет мастера маникюра - девушка в желтом платье"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full opacity-30 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full opacity-30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
