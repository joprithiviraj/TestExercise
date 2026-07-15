# Test Exercise App

A React Native application for managing vessel inspections with offline support and automatic synchronization.

## Features

- User Login
- View Inspection List
- Add New Inspection
- Offline Data Storage
- Automatic Sync when Internet is Available
- Camera/Image Upload Support
- Redux + Redux Saga State Management
- REST API Integration
- TypeScript Support
- Android & iOS Compatible

---

## Tech Stack

- React Native
- TypeScript
- Redux
- Redux Saga
- React Navigation
- AsyncStorage
- Fetch API
- JSON Server (Mock API)

---

## Project Structure

```
src/
│
├── api/
├── components/
├── navigation/
├── redux/
│   ├── actions/
│   ├── reducers/
│   ├── sagas/
│   └── store/
│
├── screens/
├── services/
├── storage/
├── types/
└── utils/
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/joprithiviraj/TestExercise.git
```

### Install Dependencies

```bash
npm install
```

## Start Metro

```bash
npm start
```

---

## Run Android

```bash
npx react-native run-android
```

---

## Run iOS

```bash
npx react-native run-ios
```

(macOS only)

---

## Mock API

Start JSON Server

```bash
json-server --watch db.json --port 3000
```

API Endpoint

```
http://localhost:3000/inspections
```

Android Emulator

```
http://10.0.2.2:3000/inspections
```

---

## Offline Sync Flow

1. User creates a new inspection.
2. Inspection is saved locally using AsyncStorage.
3. Status is marked as **Pending Sync**.
4. When internet becomes available:
   - Pending inspections are uploaded to the server.
   - Successfully uploaded items are removed from local storage.
   - Latest inspections are fetched from the server.
   - UI is updated automatically.

---

## Screens

- Login
- Home
- Add Inspection
- Inspection Details

---
