import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Eye, Heart } from "lucide-react";
import type { GalleryItem } from "@shared/schema";

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const { data: galleryItems = [], isLoading } = useQuery<GalleryItem[]>({
    queryKey: ["/api/gallery"],
  });

  const categories = [
    { id: "all", name: "Все работы", count: galleryItems.length },
    { id: "nail-art", name: "Nail Art", count: galleryItems.filter(item => item.category === "nail-art").length },
    { id: "classic", name: "Классический", count: galleryItems.filter(item => item.category === "classic").length },
    { id: "french", name: "Френч", count: galleryItems.filter(item => item.category === "french").length },
    { id: "design", name: "Дизайн", count: galleryItems.filter(item => item.category === "design").length },
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  if (isLoading) {
    return (
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse space-y-4">
              <div className="h-12 bg-gray-200 rounded w-64 mx-auto" />
              <div className="h-6 bg-gray-200 rounded w-96 mx-auto" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-white px-6 py-2 rounded-full shadow-sm mb-6">
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Портфолио</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Мои последние работы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Каждый дизайн уникален и создается с учетом индивидуальных пожеланий клиента. 
            Смотрите примеры моих работ в разных стилях.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeFilter === category.id
                  ? "bg-black text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-black hover:text-black"
              }`}
            >
              {category.name}
              <span className={`ml-2 text-xs ${
                activeFilter === category.id ? "text-gray-300" : "text-gray-400"
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`group cursor-pointer ${
                index % 3 === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.description || item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-white/80 text-sm">
                      {categories.find((cat) => cat.id === item.category)?.name}
                    </p>
                  </div>
                  
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Eye className="text-white" size={16} />
                    </div>
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Heart className="text-white" size={16} />
                    </div>
                  </div>
                </div>

                {/* Bottom info bar */}
                <div className="p-4 bg-white">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">{item.title}</span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {categories.find((cat) => cat.id === item.category)?.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="text-gray-400" size={32} />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Нет работ в этой категории</h3>
            <p className="text-gray-500">Выберите другую категорию для просмотра</p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-3xl shadow-sm max-w-lg mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">Понравилось?</h3>
            <p className="text-gray-600 mb-6">Запишитесь на консультацию и создадим уникальный дизайн для вас</p>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium"
            >
              Записаться сейчас
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
