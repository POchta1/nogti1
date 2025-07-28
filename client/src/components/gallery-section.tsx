import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import type { GalleryItem } from "@shared/schema";

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const { data: galleryItems = [], isLoading } = useQuery<GalleryItem[]>({
    queryKey: ["/api/gallery"],
  });

  const categories = [
    { id: "all", name: "Все работы" },
    { id: "nail-art", name: "Nail Art" },
    { id: "classic", name: "Классический" },
    { id: "french", name: "Френч" },
    { id: "design", name: "Дизайн" },
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  if (isLoading) {
    return (
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4" />
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Галерея работ
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Каждый дизайн создается индивидуально с учетом ваших пожеланий и
            стиля
          </p>
        </div>

        {/* Gallery Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              variant={activeFilter === category.id ? "default" : "outline"}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === category.id
                  ? "bg-dusty-rose text-white hover:bg-dusty-rose/90"
                  : "border-dusty-rose text-dusty-rose hover:bg-dusty-rose hover:text-white"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="masonry-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="masonry-item group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={item.imageUrl}
                  alt={item.description || item.title}
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm opacity-90">
                      {categories.find((cat) => cat.id === item.category)?.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Нет работ в выбранной категории
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
