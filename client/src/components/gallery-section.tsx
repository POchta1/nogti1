import { useQuery } from "@tanstack/react-query";
import type { GalleryItem } from "@shared/schema";
import { useTranslation } from "@/hooks/use-translation";
import { openWhatsAppBooking, openWhatsAppConsultation } from "@/lib/whatsapp-utils";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function GallerySection() {
  const { data: galleryItems = [], isLoading } = useQuery<GalleryItem[]>({
    queryKey: ["/api/gallery"],
  });
  const { t, language } = useTranslation();
  const isMobile = useIsMobile();
  const [showAll, setShowAll] = useState(false);
  
  // On mobile, show only first 4 items unless "show all" is clicked
  const displayItems = isMobile && !showAll ? galleryItems.slice(0, 4) : galleryItems;
  const hasMoreItems = isMobile && galleryItems.length > 4;

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
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">{t('gallerySubtitle')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            {t('galleryTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('galleryDescription')}
          </p>
        </div>



        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {displayItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`group cursor-pointer ${
                index % 3 === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.description || item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                



              </div>
            </div>
          ))}
        </div>

        {/* Load More Button - Mobile Only */}
        {hasMoreItems && !showAll && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium"
            >
              {t('loadMore')}
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-3xl shadow-sm max-w-lg mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">{t('galleryLiked')}</h3>
            <p className="text-gray-600 mb-6">{t('galleryLikedDesc')}</p>
            <button
              onClick={() => openWhatsAppConsultation(language)}
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-700 hover:shadow-lg hover:shadow-yellow-500/30 hover:scale-105 transition-all duration-300 font-medium"
            >
              {t('bookNow')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
