💸 Multi-Tenant E-Commerce App – Modern Creator Storefront Platform
A full-stack, real multi-tenant e-commerce application where creators can host their own storefronts, sell digital products, and get paid seamlessly through **Stripe Connect**.

Each creator gets a personalized subdomain, handles their own products, and customers can review, purchase, and access their personal libraries — all managed through a powerful **Payload CMS** backend and an elegant **Next.js 15** frontend.

Includes features like file delivery, automatic platform fees, and an **admin dashboard** with robust role-based access control (RBAC). Built as a truly scalable SaaS-style foundation for digital marketplaces.

---

## 🛠️ Tech Stack

### Frameworks & Core
- **Next.js 15**
- **React 19**
- **Tailwind CSS v4**
- **Payload CMS (Headless CMS)**
- **TypeScript**

### Backend & APIs
- **Payload Plugins:**  
  - `@payloadcms/plugin-multi-tenant` – Multi-tenant architecture  
  - `@payloadcms/db-mongodb` – MongoDB integration  
  - `@payloadcms/next` – Next.js + Payload hybrid app  
  - `@payloadcms/storage-vercel-blob` – File storage  
- **tRPC v11** – End-to-end type-safe API layer  
- **TanStack Query v5** – Data fetching & caching  
- **Superjson** – Data serialization  
- **Zod** – Validation & schema inference  

### Payments
- **Stripe Connect** – Marketplace payments & automatic fee routing  

### UI & Components
- **shadcn/ui** (Radix UI primitives)
- **Lucide React** – Icon set  
- **cmdk** – Command palette  
- **Embla Carousel** – Smooth product carousels  
- **Recharts** – Dashboard analytics  

### Utilities & Tooling
- `react-hook-form`, `clsx`, `tailwind-merge`, `class-variance-authority`
- `zustand` – Lightweight state management  
- `date-fns` – Date utilities  
- `sonner` – Elegant toast notifications  

---

## 📦 Key Dependencies
| Package | Version |
|----------|----------|
| `next` | 15.2.4 |
| `react` | ^19.0.0 |
| `payload` | ^3.54.0 |
| `@payloadcms/plugin-multi-tenant` | 3.59.1 |
| `@tanstack/react-query` | 5.72.1 |
| `@trpc/server` | 11.0.3 |
| `stripe` | 18.0.0 |
| `tailwindcss` | ^4 |
| `zod` | 3.24.2 |

---

## ⚙️ Features
- 🏪 **Multi-tenant store system** – Each creator has their own storefront  
- 💳 **Stripe Connect integration** – Handle payouts and fees automatically  
- 📁 **Digital file delivery** – Secure file storage via Vercel Blob  
- ⭐ **Product reviews & personal libraries**  
- 🔐 **Admin dashboard** – Full RBAC support  
- 🧠 **Headless CMS with Payload** – Custom collections, fields, and hooks  
- ⚡ **Modern developer workflow** – Type-safe, scalable, and cloud-ready  

---

## 🚀 Getting Started

```bash
# Install dependencies
bun install

# Run database migrations
bun run db:fresh

# Seed the database
bun run db:seed

# Start the dev server
bun run dev
