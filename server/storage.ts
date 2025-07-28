import { type Service, type InsertService, type GalleryItem, type InsertGalleryItem, type Booking, type InsertBooking } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Services
  getServices(): Promise<Service[]>;
  createService(service: InsertService): Promise<Service>;
  
  // Gallery
  getGalleryItems(): Promise<GalleryItem[]>;
  createGalleryItem(item: InsertGalleryItem): Promise<GalleryItem>;
  
  // Bookings
  getBookings(): Promise<Booking[]>;
  createBooking(booking: InsertBooking): Promise<Booking>;
}

export class MemStorage implements IStorage {
  private services: Map<string, Service>;
  private galleryItems: Map<string, GalleryItem>;
  private bookings: Map<string, Booking>;

  constructor() {
    this.services = new Map();
    this.galleryItems = new Map();
    this.bookings = new Map();
    
    // Initialize with sample data
    this.initializeData();
  }

  private initializeData() {
    // Services
    const services = [
      {
        id: randomUUID(),
        name: "Классический маникюр",
        description: "Профессиональная обработка ногтей и кутикулы с покрытием гель-лаком. Идеальная форма и длительный результат.",
        price: "от 2500₽",
        duration: "1.5 часа",
        icon: "hand-sparkles"
      },
      {
        id: randomUUID(),
        name: "Nail Art",
        description: "Эксклюзивные дизайны и художественная роспись. Воплощаем любые ваши идеи в уникальном стиле.",
        price: "от 3500₽",
        duration: "2-3 часа",
        icon: "palette"
      },
      {
        id: randomUUID(),
        name: "Наращивание",
        description: "Наращивание ногтей гелем или акрилом. Любая длина и форма с идеальным покрытием.",
        price: "от 4000₽",
        duration: "2.5 часа",
        icon: "gem"
      },
      {
        id: randomUUID(),
        name: "SPA-уход",
        description: "Комплексный уход за руками и ногтями с питательными масками и массажем.",
        price: "от 3000₽",
        duration: "2 часа",
        icon: "spa"
      },
      {
        id: randomUUID(),
        name: "Французский маникюр",
        description: "Элегантный классический френч или современные интерпретации с цветными акцентами.",
        price: "от 2800₽",
        duration: "1.5 часа",
        icon: "heart"
      },
      {
        id: randomUUID(),
        name: "Покрытие гель-лаком",
        description: "Стойкое покрытие гель-лаком любого оттенка. Безупречный глянец до 3 недель.",
        price: "от 2200₽",
        duration: "1 час",
        icon: "sparkles"
      }
    ];

    services.forEach(service => this.services.set(service.id, service));

    // Gallery items
    const galleryItems = [
      {
        id: randomUUID(),
        title: "Цветочный дизайн",
        category: "nail-art",
        imageUrl: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
        description: "Изысканный nail art с цветочными мотивами"
      },
      {
        id: randomUUID(),
        title: "Золотой френч",
        category: "french",
        imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=900",
        description: "Элегантный французский маникюр с золотыми акцентами"
      },
      {
        id: randomUUID(),
        title: "Геометрия",
        category: "design",
        imageUrl: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=750",
        description: "Геометрический дизайн ногтей в пастельных тонах"
      },
      {
        id: randomUUID(),
        title: "Нюдовый блеск",
        category: "classic",
        imageUrl: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
        description: "Классический нюдовый маникюр с деликатным блеском"
      },
      {
        id: randomUUID(),
        title: "Мраморный эффект",
        category: "nail-art",
        imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=750",
        description: "Художественный мраморный эффект в розовых и белых тонах"
      },
      {
        id: randomUUID(),
        title: "Блестящий градиент",
        category: "design",
        imageUrl: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
        description: "Деликатный градиент с блестками и розовым золотом"
      },
      {
        id: randomUUID(),
        title: "Омбре",
        category: "design",
        imageUrl: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=900",
        description: "Изысканный омбре эффект от розового к нюдовому"
      },
      {
        id: randomUUID(),
        title: "Минимализм",
        category: "nail-art",
        imageUrl: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=750",
        description: "Современный минималистичный nail art с тонкими золотыми линиями"
      }
    ];

    galleryItems.forEach(item => this.galleryItems.set(item.id, item));
  }

  async getServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }

  async createService(insertService: InsertService): Promise<Service> {
    const id = randomUUID();
    const service: Service = { ...insertService, id };
    this.services.set(id, service);
    return service;
  }

  async getGalleryItems(): Promise<GalleryItem[]> {
    return Array.from(this.galleryItems.values());
  }

  async createGalleryItem(insertItem: InsertGalleryItem): Promise<GalleryItem> {
    const id = randomUUID();
    const item: GalleryItem = { ...insertItem, id };
    this.galleryItems.set(id, item);
    return item;
  }

  async getBookings(): Promise<Booking[]> {
    return Array.from(this.bookings.values());
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const id = randomUUID();
    const booking: Booking = { 
      ...insertBooking, 
      id,
      createdAt: new Date()
    };
    this.bookings.set(id, booking);
    return booking;
  }
}

export const storage = new MemStorage();
