import { Award, Tag, Star } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              О мастере
            </h2>
            <h3 className="text-2xl font-playfair text-elegant-gold mb-6">
              Мария Соло
            </h3>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Привет! Меня зовут Мария, и я профессиональный nail-мастер с
                более чем 5-летним опытом работы. Моя страсть к nail-арту
                началась еще в университете, и с тех пор я не перестаю
                совершенствовать свое мастерство и изучать новые техники.
              </p>

              <p>
                Каждый клиент для меня уникален, поэтому я всегда стремлюсь
                создать дизайн, который идеально подчеркнет вашу
                индивидуальность и стиль. Работаю только с премиальными
                материалами и соблюдаю все стандарты безопасности и гигиены.
              </p>

              <p>
                Моя миссия - дарить вам не только красивые ногти, но и отличное
                настроение. Приходите, и давайте вместе создадим что-то
                прекрасное!
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-100 rounded-2xl hover:bg-gradient-to-br hover:from-yellow-50 hover:to-yellow-100 hover:shadow-lg hover:shadow-yellow-500/20 hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-elegant-gold font-playfair group-hover:animate-pulse">
                  500+
                </div>
                <div className="text-gray-600">Довольных клиентов</div>
              </div>
              <div className="text-center p-4 bg-gray-100 rounded-2xl hover:bg-gradient-to-br hover:from-yellow-50 hover:to-yellow-100 hover:shadow-lg hover:shadow-yellow-500/20 hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-elegant-gold font-playfair group-hover:animate-pulse">
                  5
                </div>
                <div className="text-gray-600">Лет опыта</div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-playfair text-xl font-bold text-gray-800 mb-4">
                Сертификаты и награды:
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <Tag className="text-warm-gold mr-3" size={20} />
                  Сертифицированный мастер nail-арта
                </li>
                <li className="flex items-center">
                  <Award className="text-warm-gold mr-3" size={20} />
                  Победитель конкурса "Лучший nail-дизайн 2023"
                </li>
                <li className="flex items-center">
                  <Star className="text-warm-gold mr-3" size={20} />
                  Мастер высшей категории
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
