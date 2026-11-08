admin logins

username:rufai
password:rufai@admin

live url: https://rufai-next-js-typescript-e-commence-vfl3-gifty8u2r.vercel.app/

This project taught me about next.js app router, server components, client components. I used shadcn ui component library to build the user interface, I used shadcn ui because of it reusability of it components and the developer having control over the component. The backend tasks were handled by next.js server actions, this approach allowed me to handle backend tasks without having to create a separate backend application. Clerk authentication was used to handle user authentication and authorization, clerk handles all the complexed authentication logic and provides a simple and secure way to manage user accounts. I used stripe for payment processing, stripe provides a simple and secure way to handle payments and it also provides a lot of features like subscription management, fraud detection, and more. I used prisma as the ORM to connect to the database, prisma provides a simple and type safe way to interact with the database. Supabase was used as the database, supabase provides a simple and scalable way to handle data storage and retrieval. The problem i encountered was connecting prisma to supabase which is seeding the database, I used the DATABASE_URL provided by supabase to connect prisma to supabase and it worked perfectly. Typescript was used to provide type safety and to catch errors at compile time, this helped me to write better code and to avoid runtime errors. And zod library was used to validate the data. This application was developed with system integrity in mind to avoid failures. I struggled enough to build this application and I have gain enough scar tissue to build more complex applications in the future."

# Full-Stack E-Commerce Platform

A modern, high-performance full-stack e-commerce application built with Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui, Supabase, Prisma, Zod, Clerk Auth and Next.js Server Actions.

![Live Demo] https://rufai-next-js-typescript-e-commence-vfl3-gifty8u2r.vercel.app/

---

## 🚀 Tech Stack

### **Frontend**

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **State & Form Validation:** [Zod](https://zod.dev/) & React Hook Form

### **Backend & Database**

- **Server Logic:** Next.js Server Actions
- **Database ORM:** [Prisma](https://www.prisma.io/)
- **Database & Auth:** [Supabase](https://supabase.com/) (PostgreSQL)
- **Hosting:** [Vercel](https://vercel.com/)

---

## ✨ Features

- 🛒 **Product Catalog & Details:** Dynamic listing, filtering, and detailed product view.
- 🛍️ **Interactive Shopping Cart:** Real-time state management for item counts and subtotal calculations.
- 🛡️ **Type-Safe Form Handling:** Schema validation powered by Zod and React Hook Form.
- ⚡ **Next.js Server Actions:** Secure, direct server-side data mutations without boilerplate REST APIs.
- 🗄️ **Relational Database Management:** Clean data modeling using Prisma ORM backed by Supabase PostgreSQL.
- 🎨 **Responsive UI:** Modern, accessible, and themeable UI components built with shadcn/ui and Tailwind CSS.

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js:** `>= 18.x`
- **npm** or **pnpm** or **yarn**

### 1. Clone the Repository

```bash
git clone https://github.com/abdul-mumin-rufai/rufai-next.js-typescript-e-commence
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 4. Push Database Schema & Generate Prisma Client

```bash
npx prisma db push
npx prisma generate
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📁 Project Structure

```text
├── app/                  # Next.js App Router pages and Server Actions
│   ├── (auth)/           # Authentication routes
│   ├── cart/             # Shopping cart page
│   ├── products/         # Product catalog and detail views
│   └── actions/          # Next.js Server Actions
├── components/           # UI components (shadcn/ui & custom components)
│   └── ui/               # Reusable primitive components
├── lib/                  # Database client, Zod schemas, and utility functions
│   ├── prisma.ts         # Prisma client instantiation
│   └── validations/      # Zod validation schemas
├── prisma/               # Database schema definitions & migrations
│   └── schema.prisma     # Prisma data models
└── public/               # Static assets (images, icons)
```

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
