export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-playfair text-3xl font-bold text-dusty-rose mb-4">
              Solo Miia
            </div>
            <p className="text-gray-400 leading-relaxed">
              Профессиональный nail-арт и маникюр в Москве. Создаем красоту с
              любовью к деталям и индивидуальным подходом к каждому клиенту.
            </p>
          </div>

          <div>
            <h4 className="font-playfair text-xl font-bold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-dusty-rose transition-colors"
                >
                  Классический маникюр
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-dusty-rose transition-colors"
                >
                  Nail Art
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-dusty-rose transition-colors"
                >
                  Наращивание
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-dusty-rose transition-colors"
                >
                  SPA-уход
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-xl font-bold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-400">
              <p>г. Москва, ул. Арбат, 12</p>
              <p>+7 (495) 123-45-67</p>
              <a
                href="https://www.instagram.com/solo.miia_nail/"
                className="text-dusty-rose hover:underline block"
                target="_blank"
                rel="noopener noreferrer"
              >
                @solo.miia_nail
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 Solo Miia Nail. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
