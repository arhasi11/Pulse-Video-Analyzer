### Video Upload & Management System

A full-stack web application that allows users to upload videos, track upload progress, and store metadata using **Node.js**, **Express**, and **MongoDB**.

---

## 🚀 Features

* Upload video files through a web interface
* Real-time upload progress indicator
* Secure file storage using Multer
* MongoDB database integration
* View uploaded videos instantly
* Simple and clean UI

---

## 🛠️ Tech Stack

| Layer       | Technology            |
| ----------- | --------------------- |
| Frontend    | HTML, CSS, JavaScript |
| Backend     | Node.js, Express.js   |
| Database    | MongoDB               |
| File Upload | Multer                |

---

## 📁 Project Structure

```
Pulse Assignment 2/
│
├── backend/
│   ├── server.js
│   ├── uploads/
│   └── public/
│       └── index.html
```

---

## ⚙️ Installation & Setup

### 1️⃣ Install Node.js

Download from:
👉 [https://nodejs.org](https://nodejs.org)

---

### 2️⃣ Install MongoDB

Download MongoDB Community Edition:
👉 [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)

Make sure MongoDB service is running.

---

### 3️⃣ Clone or Download the Project

```bash
git clone <your-repo-url>
cd "Pulse Assignment 2/backend"
```

---

### 4️⃣ Install Dependencies

```bash
npm install
```

---

### 5️⃣ Start MongoDB

```bash
mongod
```

*(Keep this terminal open)*

---

### 6️⃣ Start the Server

Open a new terminal:

```bash
node server.js
```

You should see:

```
MongoDB Connected
Server running at http://localhost:5000
```

---

## 🌐 Run the Application

Open your browser and visit:

```
http://localhost:5000
```

---

## 🗃️ Database Schema

**Collection:** `videos`

```json
{
  "_id": "ObjectId",
  "name": "sample.mp4",
  "status": "Safe",
  "uploadedAt": "2025-01-01T10:30:00Z"
}
```

---

## 🧠 How It Works

1. User selects a video file
2. File is uploaded using Multer
3. File saved in `/uploads` folder
4. Metadata saved in MongoDB
5. Video appears on the webpage

---

## 📌 Future Enhancements

* User authentication (login/signup)
* Admin dashboard
* Cloud storage (AWS / Firebase)
* Video compression
* AI-based content moderation

---

👨‍💻 Author

Name: ARHASI SONI
Technology: MERN Stack (Backend-focused)


Just tell me!
