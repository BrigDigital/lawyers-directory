# NyayaNext – Lawyers Module

This is the `lawyers.js` module of the [NyayaNext](https://www.nyayanext.com) legal assistance platform. It is responsible for rendering and managing the public-facing directory of verified lawyers. Visitors can search for lawyers, view contact details (after authentication), and optionally leave messages.

## 📌 Features

- Displays a list of registered lawyers
- Supports search and filtering (e.g., by region or practice area)
- Contact or message a lawyer after authentication (coming soon)
- Designed for integration with backend lawyer registration flow

## 🧩 Tech Stack

- React + Next.js
- Chakra UI
- Optional integration with Supabase / PostgreSQL backend

## 🔧 Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/BrigDigital/nyayanext-public.git
   cd nyayanext-public
# lawyers-directory
core module for NyayaNext lawyer onboarding and search

## 🧪 Testing

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the test suite:
   ```bash
   npm test
   ```

The test setup uses Jest with a jsdom environment. If `npm test` fails with `jest: command not found`, make sure dependencies were installed correctly.
