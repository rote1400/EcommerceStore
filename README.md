# Ecommerce Store with Admin Dashboard

Welcome to the Full Stack Ecommerce Store, a modern and fully functional ecommerce platform built from scratch. This project leverages the power of Next.js, Prisma, Stripe, and Tailwind CSS to deliver a seamless shopping experience for customers and a robust admin dashboard for store management.

## Features

- **Next.js**: Fast, scalable, and SEO-friendly frontend framework for a responsive and dynamic user interface.
- **Prisma**: Modern database toolkit for effortless data management and seamless integration with PostgreSQL.
- **Stripe**: Secure and reliable payment processing to handle transactions with ease.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development and a polished, responsive design.
- **Shadcn**: Integration for shadow DOM encapsulation, ensuring style isolation and better component reusability.
- **Admin Dashboard**: Comprehensive admin panel to manage products, orders, and customers with ease.
- **User Authentication**: Secure user registration and login system with session management.
- **Product Management**: Add, edit, and delete products with real-time updates.
- **Order Management**: Track and manage customer orders efficiently.
- **Customer Management**: View and manage registered customers.
- **Responsive Design**: Optimized for all devices, ensuring a smooth experience on desktops, tablets, and mobile phones.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Second, run Stripe server in new Terminal, for the transactions of the payments:

```bash
.././stripe listen --forward-to localhost:3000/webhooks/stripe

Using Resend as email service for sending confirmation emails.

Third, run Email server in new Terminal, for developing purposes:

```bash
npm run email