# Recurrly 📱

A modern subscription management application built with **React Native** and **Expo SDK 54**. This project serves as a comprehensive learning journey into the world of native mobile development using the latest industry-standard tools.

---

## 🛠️ Technology Stack

| Feature | Technology |
| :--- | :--- |
| **Framework** | [Expo SDK 54](https://expo.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [NativeWind](https://www.nativewind.dev/) (Tailwind CSS for React Native) |
| **Routing** | [Expo Router](https://docs.expo.dev/router/introduction/) (File-based) |
| **Authentication** | [Clerk](https://clerk.com/) |

---

## 🚀 Learning & Implementation Progress

### 1️⃣ Initial Setup & Configuration
- [x] **Expo & TypeScript**: Initialized a robust foundation using Expo SDK 54 with strict TypeScript typing.
- [x] **NativeWind Integration**: Performed a manual setup of NativeWind to leverage Tailwind CSS utility classes in a native environment.

### 2️⃣ Advanced Routing (Expo Router)
- [x] **File-Based Routing**: Implemented a clean directory structure where files automatically become routes.
- [x] **Route Grouping**: Organized routes using groups `(tabs)` to manage layouts without affecting the URL structure.
- [x] **Layout Patterns**: Built nested layouts to share common UI components across different screens.
- [x] **Dynamic Routing**: Developed dynamic pages (e.g., `subscriptions/[id]`) utilizing `useLocalSearchParams` to handle parameter-driven navigation.

### 3️⃣ Architecture & Design Patterns
- [x] **Project Structure**: Established a scalable folder architecture for components, hooks, and constants.
- [x] **Native Design**: Focused on building a fluid, responsive UI that feels "at home" on both iOS and Android.

---

## 🏗️ Project Structure

```text
app/
├── (tabs)/              # Main tab-based navigation group
│   ├── index.tsx        # Dashboard / Home
│   ├── subscriptions/   # Subscription management
│   │   └── [id].tsx     # Dynamic subscription details
│   └── settings.tsx     # User settings
├── _layout.tsx          # Root layout and providers
└── +not-found.tsx       # Error handling for invalid routes
components/              # Reusable UI components
constants/               # Theme colors and global strings
hooks/                   # Custom React hooks
```

---

## 🏁 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Development Server**
   ```bash
   npx expo start
   ```

3. **Open the App**
   - Scan the QR code with the **Expo Go** app (iOS/Android).
   - Press `i` for iOS Simulator.
   - Press `a` for Android Emulator.

---

*Keep building and keep learning! 🚀*
