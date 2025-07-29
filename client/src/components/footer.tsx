import { useTranslation } from "@/hooks/use-translation";

export default function Footer() {
  const { t } = useTranslation();
  
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
              {t('footerDescription')}
            </p>
          </div>

          <div>
            <h4 className="font-playfair text-xl font-bold mb-4">{t('services')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-dusty-rose transition-colors"
                >
                  {t('classicManicure')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-dusty-rose transition-colors"
                >
                  {t('nailArt')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-dusty-rose transition-colors"
                >
                  {t('extension')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-dusty-rose transition-colors"
                >
                  {t('spaCare')}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-xl font-bold mb-4">{t('contactTitle')}</h4>
            <div className="space-y-2 text-gray-400">
              <p>{t('addressText')}</p>
              <p>+43 664 93020595</p>
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
          <p className="text-gray-400">{t('footerCopyright')}</p>
        </div>
      </div>
    </footer>
  );
}
