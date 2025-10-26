# 🎬 Movie Finder

A modern movie search application that helps you discover movies without the hassle. Built with React 19, powered by TMDB API, and featuring real-time trending searches tracked with Appwrite.

![Movie Finder Banner](./public/hero.png)

## ✨ Features

- 🔍 **Real-time Search** - Search for movies with debounced API calls
- 📈 **Trending Movies** - See what others are searching for
- 🎯 **Smart Tracking** - Automatically tracks search popularity
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎨 **Modern UI** - Clean and responsive design

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Backend/Database:** Appwrite (TablesDB)
- **Movie Data:** TMDB API
- **Styling:** CSS with custom design
- **State Management:** React Hooks

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn
- An Appwrite account ([appwrite.io](https://appwrite.io))
- A TMDB API key ([themoviedb.org](https://www.themoviedb.org))

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/shahadot786/react-movie-app.git
cd react-movie-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Appwrite

1. Create a new project in [Appwrite Console](https://cloud.appwrite.io)
2. Create a new Database
3. Create a new Table with the following columns:

| Column Name | Type    | Required | Default |
| ----------- | ------- | -------- | ------- |
| searchTerm  | String  | Yes      | -       |
| count       | Integer | Yes      | 0       |
| movie_id    | Integer | Yes      | -       |
| poster_url  | String  | Yes      | -       |

4. Set Table Permissions:
   - Go to Settings → Permissions
   - Add role: **Any**
   - Enable: ✅ Read, ✅ Create, ✅ Update

### 4. Get TMDB API Key

1. Sign up at [TMDB](https://www.themoviedb.org/signup)
2. Go to Settings → API
3. Request an API key (it's free!)
4. Copy your API Read Access Token

### 5. Configure Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_TABLE_ID=your_table_id
VITE_TMDB_API_KEY=your_tmdb_api_key
```

**⚠️ Important:** Never commit your `.env` file to version control!

### 6. Run the Application

```bash
npm run dev
```

Visit `http://localhost:5173` to see the app in action! 🎉

## 📁 Project Structure

```
movie-finder/
├── public/
│   └── hero.png
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   ├── Search.jsx
│   │   └── Spinner.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── appwrite.js
├── .env
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🔧 Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## 📦 Key Dependencies

```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "appwrite": "^16.0.2",
  "react-use": "^17.5.0",
  "vite": "^6.0.0"
}
```

## 🎯 How It Works

1. **Search Movies** - Users search for movies using the TMDB API
2. **Track Searches** - Each search is recorded in Appwrite TablesDB
3. **Count Updates** - If a movie is searched again, its count increments
4. **Trending Display** - Top 5 most searched movies are displayed

## 🔐 Security Notes

- All environment variables are prefixed with `VITE_` to be exposed to the client
- Appwrite permissions are set to `Any` for public access
- For production, consider implementing user authentication
- Never expose your API keys in client-side code (use server-side functions for sensitive operations)

## 🐛 Troubleshooting

### 401 Unauthorized Error

- Check Appwrite table permissions (Read, Create, Update should be enabled for "Any")
- Verify your Project ID, Database ID, and Table ID in `.env`

### Movies Not Loading

- Verify your TMDB API key is correct
- Check browser console for CORS or network errors

### Trending Movies Not Showing

- Ensure the `count` column exists in your Appwrite table
- Check that table permissions allow reading

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Movie data provided by [TMDB](https://www.themoviedb.org)
- Backend powered by [Appwrite](https://appwrite.io)
- Icons and images from respective sources

## 📧 Contact

Project Link: [https://github.com/shahadot786/react-movie-app.git](https://github.com/shahadot786/react-movie-app.git)

---

Made with ❤️ using React 19 and Appwrite
