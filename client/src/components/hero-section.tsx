import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blush to-dusty-rose/20"
    >
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--dusty-rose)) 2px, transparent 2px), 
                             radial-gradient(circle at 75% 75%, hsl(var(--warm-gold)) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Искусство на
            <br />
            <span className="text-dusty-rose">ваших ногтях</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light leading-relaxed">
            Профессиональный маникюр и эксклюзивный nail art
            <br />в атмосфере роскоши и комфорта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-dusty-rose text-white px-8 py-3 rounded-full hover:bg-dusty-rose/90 transition-all transform hover:scale-105 font-medium"
            >
              Записаться на прием
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="border-2 border-dusty-rose text-dusty-rose px-8 py-3 rounded-full hover:bg-dusty-rose hover:text-white transition-all transform hover:scale-105 font-medium"
            >
              Посмотреть работы
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-dusty-rose text-2xl" />
      </div>
    </section>
  );
}
