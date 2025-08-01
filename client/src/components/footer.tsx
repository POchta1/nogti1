import { useTranslation } from "@/hooks/use-translation";
import { Instagram } from "lucide-react";

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
            <div className="text-3xl font-bold text-dusty-rose mb-4">Solo.Miia</div>
            <p className="text-gray-400 leading-relaxed">
              {t('footerDescription')}
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">{t('services')}</h4>
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
              
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">{t('contactTitle')}</h4>
            <div className="space-y-2 text-gray-400">
              <p>{t('addressText')}</p>
              <p>+43 664 93020595</p>
              
              <div className="mt-4">
                <h5 className="text-lg font-semibold mb-3 text-white">{t('socialMedia')}</h5>
                <a
                  href="https://www.instagram.com/solo.miia_nail/"
                  className="inline-flex items-center gap-2 text-dusty-rose hover:text-white transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span>@solo.miia_nail</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">{t('needWebsite')}</p>
        </div>
      </div>
    </footer>
  );
}
