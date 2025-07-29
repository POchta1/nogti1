# Nail Salon Website

## Overview

This is a full-stack web application for a nail salon business called "Solo Miia". It's built as a modern single-page application with a React frontend and Express.js backend, designed to showcase services, display a gallery of work, and handle customer bookings.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared components:

- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (currently using in-memory storage as fallback)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: React Query for server state, React hooks for local state

## Key Components

### Frontend Architecture
- **React Router**: Uses wouter for client-side routing
- **UI Components**: Extensive use of Radix UI primitives through shadcn/ui
- **Form Handling**: React Hook Form with Zod validation
- **Styling**: Tailwind CSS with custom design tokens for the nail salon brand
- **Query Management**: TanStack React Query for API data fetching and caching

### Backend Architecture
- **Express Server**: RESTful API with middleware for logging and error handling  
- **Storage Layer**: Abstracted storage interface with in-memory implementation (ready for database integration)
- **Validation**: Zod schemas shared between frontend and backend
- **Development Setup**: Vite integration for hot reloading in development

### Database Schema
The application defines three main entities:
- **Services**: Nail salon services with pricing and duration
- **Gallery Items**: Portfolio images with categories
- **Bookings**: Customer appointment requests

## Data Flow

1. **Client Requests**: Frontend makes API calls through a centralized query client
2. **Server Processing**: Express routes handle requests, validate data, and interact with storage
3. **Storage Layer**: Currently uses in-memory storage with sample data, designed to easily swap to database
4. **Response Handling**: Structured error handling and consistent API responses

## External Dependencies

### Core Framework Dependencies
- **React 18**: Component framework with TypeScript support
- **Express**: Node.js web framework
- **Drizzle ORM**: Type-safe database toolkit (configured for PostgreSQL)
- **Neon Database**: Serverless PostgreSQL integration

### UI and Styling
- **shadcn/ui**: Comprehensive component library built on Radix UI
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Lucide Icons**: Icon library

### Development Tools
- **Vite**: Fast build tool and dev server
- **TypeScript**: Type safety across the stack
- **Zod**: Runtime type validation
- **React Hook Form**: Form handling with validation

## Deployment Strategy

The application is configured for deployment with:

- **Build Process**: Vite builds the frontend, esbuild bundles the backend
- **Static Assets**: Frontend built to `dist/public` for serving
- **Environment Variables**: Database connection via `DATABASE_URL`
- **Production Server**: Express serves both API and static files
- **Development**: Hot reloading with Vite middleware integration

The current setup includes in-memory storage as a fallback, making it easy to develop and test without requiring a database connection. The Drizzle configuration is ready for PostgreSQL integration when needed.

## Recent Changes

### Latest Modifications

**29.07.2025** - WhatsApp Integration
- Added WhatsApp booking functionality with direct contact +43 664 93020595
- Updated all booking buttons to redirect to WhatsApp with pre-filled message
- Service-specific messages include selected service name
- Implemented openWhatsAppBooking utility function

**29.07.2025** - Multi-language Support (Restored and Updated)
- Restored support for German, English, and Ukrainian languages (removed Russian)
- Set German as default language per user request
- Added language selection modal that appears on first visit
- Implemented LanguageContext and useTranslation hook
- Created comprehensive translation system with 150+ translated strings
- Added language selector component with flag icons
- Saves language preference to localStorage
- WhatsApp messages now sent in selected language
- Fixed service cards layout to ensure equal heights

**29.07.2025** - Project Migration & Service Addition
- Successfully migrated project from Replit Agent to Replit environment
- Verified proper client/server separation and security practices
- Added new service: "Снятие покрытия" (coating removal) for 10€, 30 minutes duration
- All systems tested and working correctly with multi-language support