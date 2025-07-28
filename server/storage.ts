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
        description: "Профессиональная обработка ногтей и кутикулы с покрытием гель-лаком.",
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
        title: "Элегантный дизайн",
        category: "nail-art",
        imageUrl: "/attached_assets/1753734091510_1753734147300.jpeg",
        description: "Изысканный nail art с декоративными элементами"
      },
      {
        id: randomUUID(),
        title: "Классический стиль",
        category: "classic",
        imageUrl: "/attached_assets/1753734106090_1753734147301.jpeg",
        description: "Элегантный классический маникюр"
      },
      {
        id: randomUUID(),
        title: "Современный дизайн",
        category: "design",
        imageUrl: "/attached_assets/1753734116789_1753734147301.jpeg",
        description: "Современный авторский дизайн"
      },
      {
        id: randomUUID(),
        title: "Художественная роспись",
        category: "nail-art",
        imageUrl: "/attached_assets/1753734133614_1753734147301.jpeg",
        description: "Уникальная художественная роспись"
      },
      {
        id: randomUUID(),
        title: "Профессиональная работа",
        category: "design",
        imageUrl: "/attached_assets/mis_beauty_coworking_1753734047518_1753734147301.jpeg",
        description: "Качественное профессиональное исполнение"
      },
      {
        id: randomUUID(),
        title: "Авторский стиль",
        category: "nail-art",
        imageUrl: "/attached_assets/mis_beauty_coworking_1753734078477_1753734147301.jpeg",
        description: "Неповторимый авторский дизайн"
      },
      {
        id: randomUUID(),
        title: "Стильный маникюр",
        category: "design",
        imageUrl: "/attached_assets/1753734584279_1753734835271.jpeg",
        description: "Стильное решение для повседневности"
      },
      {
        id: randomUUID(),
        title: "Креативный подход",
        category: "nail-art",
        imageUrl: "/attached_assets/1753734598039_1753734835271.jpeg",
        description: "Креативное исполнение дизайна"
      },
      {
        id: randomUUID(),
        title: "Изящное покрытие",
        category: "classic",
        imageUrl: "/attached_assets/1753734612207_1753734835271.jpeg",
        description: "Изящное классическое покрытие"
      },
      {
        id: randomUUID(),
        title: "Индивидуальный дизайн",
        category: "nail-art",
        imageUrl: "/attached_assets/1753734635752_1753734835271.jpeg",
        description: "Индивидуальный подход к каждому клиенту"
      },
      {
        id: randomUUID(),
        title: "Креативный дизайн",
        category: "nail-art",
        imageUrl: "/attached_assets/1753738817915_1753739748578.jpeg",
        description: "Оригинальный nail art с яркими акцентами"
      },
      {
        id: randomUUID(),
        title: "Стильный маникюр",
        category: "classic",
        imageUrl: "/attached_assets/1753739718804_1753739748579.jpeg",
        description: "Элегантный маникюр с современным дизайном"
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
    const item: GalleryItem = { 
      ...insertItem, 
      id,
      description: insertItem.description || null
    };
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
      message: insertBooking.message || null,
      createdAt: new Date()
    };
    this.bookings.set(id, booking);
    return booking;
  }
}

export const storage = new MemStorage();
