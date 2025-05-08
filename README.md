# 🚀 AppStore

**AppStore** is a fully responsive and dynamic single-page web application that enables users to discover, install, and review apps across various categories. It supports email/password and Google-based login using Firebase authentication, and provides an engaging user experience with trending apps, categorized listings, and real-time user reviews.

---

## 🎯 Project Purpose

The purpose of this project is to build a user-centric AppStore platform where users can:
- Browse trending and categorized apps
- View app details and install/uninstall them
- Submit and view app reviews
- Manage their profile information
- Receive app notifications

---

## 🌐 Live Site

👉 [Live URL](https://appstore-1529c.web.app/)

---

## 🔑 Key Features

- 🔐 **Authentication** using Firebase (email/password and Google)
- 🔁 **Protected Routes** for App Details, My Profile, and Notifications
- ⭐ **App Reviews** with dynamic rendering of comments and ratings
- 📲 **Install/Uninstall Toggle** for apps
- 📚 **Categories**: Education, Productivity, Health
- 🔥 **Trending Apps** based on rating
- 🖼️ **Responsive Image Sliders** for promotions
- 🧭 **Dynamic Navbar & Footer** on all pages
- 📝 **Editable User Profile** (with `updateProfile`)
- 🔔 **Notification Page** for logged-in users
- ❌ Custom **404 Not Found** page
- 🧭 **Dynamic Page Titles**
- 💬 **Toast & Alert Feedback** for actions (success/error)
- 🔁 **Persistent Login** using `onAuthStateChanged` from Firebase

---

## 🧱 Layout Structure

### ✅ Navbar
- Logo and links to: Apps, My Profile
- Active link highlighting
- Shows Login or User Profile + Logout (with username on hover)

### ✅ Main Section
- Renders based on route (Apps, Details, Profile, etc.)

### ✅ Footer
- Terms of Service, Privacy Policy, Developer Resources,Support, Social Media

---

## 📦 JSON Data

- At least 8 apps
- At least 3 categories ( Productivity, Gaming, Education)
- Each app has: ID, name, developer, thumbnail, banner, downloads, rating, category, features, reviews

---

## 📄 Pages Overview

### 🏠 Home (Apps) Page
- 🔄 **Slider** with 3+ slides
- 📈 **Trending Section** (Top 4 rated apps)
- 📂 **Category Sections** (e.g., Productivity, Health, Education)
- ➕ **Extra Section** (e.g., Testimonials or FAQs)
- 📦 **App Cards**: thumbnail, name, rating, downloads (click to view details)

### 🔍 App Details Page _(Protected)_
- Full app info (from JSON)
- **Install/Uninstall** functionality
- Review form (Review + Rating [1–5])
- Only installed users can review (review persists for session only)

### 👤 My Profile _(Protected)_
- Show: name, email, photo
- Editable name and photo (with `updateProfile`)

### 🔔 Notification Page _(Protected)_
- Displays messages for logged-in users

### 🔐 Login/Register
- Email, Password, Google login
- Password rules: 1 uppercase, 1 lowercase, min 6 chars
- All alerts via **SweetAlert**

### ❌ 404 Page
- For unknown routes

---

## 🛠️ Technologies Used

| Technology         | Purpose                                    |
|--------------------|--------------------------------------------|
| **React**          | Frontend Framework                         |
| **React Router DOM** | Routing & Protected Routes              |
| **Tailwind CSS**   | Utility-First CSS Framework                |
| **DaisyUI**        | Tailwind-based UI Component Library        |
| **Firebase**       | Auth, Hosting, User State                  |
| **SweetAlert2**    | Alerts and Toast messages                  |
| **React Icons**    | Icons in UI                                |

---

## 🔐 Firebase & Env Setup

- Firebase credentials are stored in `.env.local`:
