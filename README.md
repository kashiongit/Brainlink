BrainLink 🧠
BrainLink is a web application designed to help users efficiently store and organize their important links, including YouTube videos, tweets, Notion documents, and websites. The app serves as a digital second brain, enabling users to manage their knowledge and resources effectively. Users can also choose to share their "brain" with the world, creating a collaborative knowledge-sharing platform.

🚀 Features
• Organize Your Links: Save and categorize YouTube videos, tweets, Notion docs, and websites in one place.
• Personalized Second Brain: Build a structured repository of resources tailored to your needs.
• Sharing Made Easy: Optionally share your collection with others and explore shared brains for new insights.
• Search and Filter: Quickly find stored links using robust search and filter functionality.
• Responsive Design: Optimized for both desktop and mobile devices.
• User-Friendly Interface: Intuitive design for easy navigation and management.

🛠️ Tech StackFrontend:
• Framework: React with TypeScript
• Styling: Tailwind CSS
• Build Tool: ViteBackend:
• Framework: Node.js with Express
• Database: MongoDB for data storage
• Authentication: JWT (JSON Web Tokens)


Link🏗️ Folder Structure

BrainLink/
├── Backend/          # Contains the server-side code
│   ├── src/          # Backend source files
│   ├── .env          # Environment variables for the backend
│   └── package.json
├── Frontend/         # Contains the client-side code
│   ├── src/          # Frontend source files
│   ├── public/       # Public assets like logos
│   └── package.json
└── README.md         # Project documentation

⚙️ Installation and Setup
1. Clone the repository:

git clone https://github.com/kashiongit/Brainlink.git

cd BrainLink
2. Setup Backend:

cd Backend
npm install
npm run dev
3. Setup Frontend:

cd ../Frontend
npm install
npm run dev

4. Environment Variables:
    ◦ Create .env files in the respective folders with the following:
        ▪ Backend .env:

PORT=3000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-secret-key>

        ▪ Frontend .env:

VITE_BASE_URL=<backend-api-url>
✨ Key Functionalities
• Save and Categorize: Keep your links organized by categories or tags.
• Explore Shared Brains: Discover resources shared by other users.


THIS PROJECT IS UNDER CONSTRUCTION -----
CURRENTLY WORKING ON FRONTEND COMPONENTS
