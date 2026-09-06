# Estatein Real Estate Platform

Estatein is a responsive real estate web application built as a graduation project. It allows visitors to explore and filter property listings, view property details, learn about real estate services, and submit inquiries. It also includes a dashboard for managing properties, FAQs, and testimonials.

## Features

- Responsive public pages: Home, About, Properties, Property Details, Services, and Contact.
- Property search and filtering by location, type, price, area, and build year.
- Detailed property pages with image galleries, features, pricing, and inquiry forms.
- Dashboard CRUD operations for properties, FAQs, and testimonials.
- Real-time Firestore synchronization using `onSnapshot`.
- Light and dark themes with the selected theme stored locally.
- Reusable forms, inputs, cards, sliders, loading states, and responsive layouts.
- Property image management using local asset paths or HTTPS URLs.

## Tech Stack

- **React 19** and **TypeScript**
- **Vite**
- **Tailwind CSS 4**
- **Redux Toolkit** and **React Redux**
- **React Router**
- **Firebase Firestore**
- **Framer Motion**
- **React Icons**

## Architecture

Firestore is the main data source. Real-time listeners keep the Redux store and the interface synchronized.

```text
Firestore
  -> onSnapshot listeners
  -> DataListener
  -> Redux Store
  -> UI
```

Dashboard write operations follow a reusable data layer:

```text
Dashboard UI
  -> Redux Async Thunk
  -> Entity API
  -> Firebase API
  -> Firestore
  -> onSnapshot
  -> Redux Store
  -> UI
```

Redux arrays are not updated manually after create, update, or delete operations because Firestore listeners provide the latest data.

## Project Structure

```text
src/
  components/   Reusable UI, sections, forms, and dashboard components
  config/       Firebase configuration
  data/         Shared Firestore and entity API functions
  pages/        Public pages and dashboard layouts
  redux/        Store, slices, filters, and async thunks
  types/        Shared TypeScript types
```

## Getting Started

### Prerequisites

- Node.js
- npm
- A Firebase project with Firestore enabled

### Installation

```bash
git clone https://github.com/rashahatoum/estatein-website-graduation-project-adv-v10-x1.git Estatein-Website
cd Estatein-Website
npm ci
```

Create a `.env` file in the project root and provide your Firebase web configuration:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

Firebase web configuration identifies the Firebase project and is exposed to the client application. Protect Firestore data with appropriate Security Rules, and never store service account credentials or private server keys in Vite environment variables.

Start the development server:

```bash
npm run dev
```

## Available Scripts

```bash
npm run dev       # Start the development server
npm run build     # Type-check and build for production
npm run lint      # Run ESLint
npm run preview   # Preview the production build locally
```

## Important Notes

- Firebase Firestore acts as the project's backend service; there is no separate custom backend.
- Dashboard access uses a simple session-based educational simulation. It is not production authentication and does not use Firebase Authentication.
- Firebase Storage is not used. Property images are saved as local `/assets/` paths or HTTPS URLs.
- Client-side routing is configured for Vercel through `vercel.json`.

## Project Status

This project is under active development as an educational graduation project.
