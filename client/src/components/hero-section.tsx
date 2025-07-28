import { Star, Play, ArrowDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full">
              <Star className="text-elegant-gold" size={16} />
              <span className="text-sm font-medium text-gray-700">Профессиональный мастер</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
                Создаю 
                <span className="block text-elegant-gold">красоту</span>
                на ваших ногтях
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Индивидуальный подход к каждому клиенту. Качественные материалы. 
                Авторские дизайны. Более 5 лет опыта.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-black text-white px-8 py-4 rounded-full hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-700 hover:shadow-lg hover:shadow-yellow-500/30 hover:scale-105 transition-all duration-300 font-medium text-lg"
              >
                Записаться онлайн
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="flex items-center justify-center space-x-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-yellow-500 hover:text-yellow-600 hover:bg-yellow-50 hover:scale-105 transition-all duration-300 font-medium text-lg"
              >
                <Play size={20} />
                <span>Смотреть работы</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-black">500+</div>
                <div className="text-gray-600">Довольных клиентов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-black">5</div>
                <div className="text-gray-600">Лет опыта</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-black">100%</div>
                <div className="text-gray-600">Качество</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200"
                alt="Профессиональный nail art - роскошный дизайн ногтей"
                className="w-full h-full object-cover"
              />
              
              {/* Floating Elements */}
              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Сейчас доступна</span>
                </div>
              </div>
              
              <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-sm text-white p-4 rounded-2xl">
                <div className="text-sm font-medium">Следующая запись</div>
                <div className="text-lg font-bold">Завтра 14:00</div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-elegant-gold/30 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-yellow-200/50 to-yellow-300/50 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="text-center pb-12">
        <button
          onClick={() => scrollToSection("gallery")}
          className="inline-flex items-center space-x-2 text-gray-500 hover:text-yellow-600 hover:scale-105 transition-all duration-300"
        >
          <span className="text-sm font-medium">Смотреть портфолио</span>
          <ArrowDown size={16} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
