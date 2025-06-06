# 🛡️ Auth-Notes Project

A **full-stack web application** that allows users to securely **create, view, edit, and delete personal notes**. It is built using:

- **Frontend**: React (Vite)
- **Backend**: Django + Django REST Framework
- **Authentication**: JWT-based (access & refresh tokens)

---

## 📁 Project Structure

```
Auth-Notes/
├── frontend/        # React + Vite frontend
│   ├── index.html
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── api.js
│       ├── components/
│       │   ├── Form.jsx
│       │   ├── Note.jsx (with edit functionality)
│       │   ├── ProtectedRoute.jsx
│       │   └── Lodingindicator.jsx
│       ├── pages/
│       │   ├── Home.jsx (handles note operations)
│       │   ├── Notfound.jsx
│       │   ├── Login.jsx
│       │   └── Register.jsx
│       └── styles/
│           └── *.css
├── backend/         # Django backend
│   ├── manage.py
│   ├── backend/
│   │   ├── urls.py
│   │   └── settings.py
│   └── api/
│       ├── models.py
│       ├── views.py (with note CRUD operations)
│       ├── urls.py
│       └── serializers.py
└── README.md
```

---

## 🔐 Authentication Flow (JWT)

1. Users **register** or **login** to get **access** and **refresh** tokens.
2. Access token is saved in **localStorage**.
3. All API requests attach the access token via `Authorization` header.
4. If access token expires, a new one is obtained using the refresh token.
5. Logging out clears all stored tokens.

---

## ✅ Features

- User **registration & login** with JWT
- **Protected routes** via React HOC
- Create, read, update, and delete personal notes (full CRUD)
- Inline editing for existing notes
- **Authentication-aware UI**
- Navigation between login and register pages
- Modern, responsive design with interactive elements
- Custom **loading spinner**

---

## ⚙️ Setup Instructions

### 🔸 1. Clone the Project
```bash
git clone https://github.com/your-username/Auth-Notes.git
cd Auth-Notes
```

---

### 🔸 2. Backend Setup (Django)

#### a. Navigate to backend:
```bash
cd backend
```

#### b. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
```

#### c. Install dependencies:
```bash
pip install -r requirements.txt
```

#### d. Apply migrations:
```bash
python manage.py makemigrations
python manage.py migrate
```

#### e. Create a superuser (optional):
```bash
python manage.py createsuperuser
```

#### f. Start Django server:
```bash
python manage.py runserver
```

---

### 🔸 3. Frontend Setup (React + Vite)

#### a. Navigate to frontend:
```bash
cd ../frontend
```

#### b. Install dependencies:
```bash
npm install
```

#### c. Start the dev server:
```bash
npm run dev
```

> App runs at `http://localhost:5173` and connects to Django at `http://127.0.0.1:8000`

---

## 🔁 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/user/register/` | Register a new user |
| POST | `/api/token/` | Get access & refresh tokens |
| POST | `/api/token/refresh/` | Refresh access token |
| GET | `/api/notes/` | Get all notes for current user |
| POST | `/api/notes/` | Create a new note |
| PUT | `/api/notes/update/:id/` | Update a specific note |
| DELETE | `/api/notes/delete/:id/` | Delete a specific note |

---

## 🔒 CORS Configuration (Backend)

Make sure `django-cors-headers` is installed and set:

```bash
pip install django-cors-headers
```

In `settings.py`:

```python
INSTALLED_APPS = [
    ...
    'corsheaders',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    ...
]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
]
```

---

## 🎨 UI Features

- Modern card-based design for notes
- Hover effects and animations for interactive elements
- Inline editing with save/cancel options
- User-friendly navigation between pages
- Responsive layout that works on different screen sizes
- Consistent color scheme and typography

---

## 🧠 Notes

- Project built for **learning purposes**, focusing on:
  - Full-stack authentication
  - Complete CRUD operations
  - React + Django integration
- Can be extended with:
  - Pagination
  - Search functionality
  - User profile management
  - Categories or tags for notes
  - Rich text editing

---

## 👨‍💻 Author

This project was developed by **Mathan**, a student at **KPR Institute of Engineering and Technology**
---

## 📜 License

MIT License – free to use and modify.
