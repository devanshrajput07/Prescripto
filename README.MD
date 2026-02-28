# 🌟 Prescripto

Prescripto is a comprehensive web application built with the MERN stack designed to facilitate easy online doctor appointment booking and management. The system empowers patients, doctors, and administrators with distinct roles and capabilities to streamline healthcare appointments, earnings tracking, and platform administration.

## ✨ Features

- 📅 Patients can register and book appointments with doctors through a simple, intuitive interface.
- � Integrated Stripe Checkout for seamless and secure online payments (Cards, Amazon Pay, UPI, etc., with automatic payment methods).
- 👩‍⚕️ Doctors have dedicated panels to view, manage appointments, and track earnings efficiently.
- 🛠️ Admin panel allows adding new doctors, viewing and managing all doctors and appointments, and overseeing platform operations.
- 🔐 Secure authentication for doctors, patients, and admin users via JWT.
- 🔍 Search and filter appointments by date, doctor, or status.-
- 📊 Dashboard providing doctors with their earnings and appointment statistics.

## 🛠️ Technologies Used

- 🗄️ MongoDB for storing users, doctors, appointments, and earnings data.
- 🚀 Express.js for backend REST API development and business logic handling.
- ⚛️ React.js for a responsive and user-friendly frontend interface.
- 🟢 Node.js runtime environment.
- 💳 Stripe SDK for secure payment processing.
- 🔐 JWT-based authentication and role-based authorization.

## 🚀 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/devanshrajput07/Prescripto.git
   cd Prescripto
   ```

2. Configure environment variables as follows:

   ```
   VITE_BASE_URL=""
   VITE_ADMIN_PANEL_URL=""
   PORT=""
   MONGODB_URI=""
   CLOUDINARY_NAME=""
   CLOUDINARY_API_KEY=""
   CLOUDINARY_SECRET_KEY=""
   JWT_SECRET=""
   STRIPE_SECRET_KEY=""
   ```

3. Navigate to both `server` and `client` directories and install dependencies, then run development servers:

   ```bash
   cd server
   npm install
   npm run dev
   ```

   Open a new terminal window, then:

   ```bash
   cd client
   npm install
   npm run dev
   ```

   Open a new terminal window, then:

   ```bash
   cd admin
   npm install
   npm run dev
   ```

## 🎯 Usage

- 🧑‍⚕️ Patients register, browse available doctors, book, reschedule, or cancel appointments.
- 👩‍⚕️ Doctors log in to manage appointments, confirm or cancel bookings, and monitor their earnings through their dashboard.
- 🛡️ Admin users can add new doctors, view all registered doctors and users, and manage appointments via the admin panel.
- 📅 Users can manage appointments easily through the interface, receiving secure notifications and updates.

---
