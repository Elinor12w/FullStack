🛍️ FullStack E-Commerce Web Application

A Full-Stack E-commerce Web Application built with modern web technologies.
The application allows users to browse products, view detailed product pages, and interact with a dynamic backend API.

🔗 Live Demo:
https://fullstack-h36y.onrender.com/

🚀 Features

Product listing page

Dynamic Single Product Page (based on product ID)

REST API integration

Client–Server architecture

Clean UI with centered product card layout

Navigation with “Back to Home” functionality

Error handling (404 handling for invalid routes)

Deployment to production (Render)

🏗️ Tech Stack
Frontend

HTML5

CSS3

JavaScript (Vanilla JS)

Fetch API

Backend

Node.js

Express.js

RESTful API structure

Deployment

Render (Production hosting)

📂 Project Structure
/client
  ├── index.html
  ├── singleProduct.html
  ├── css/
  └── js/

/server
  ├── routes/
  ├── controllers/
  └── server.js
🔄 How It Works

The homepage fetches product data from the backend API.

Each product links to a dynamic route:

/product.html?id=PRODUCT_ID

The Single Product Page extracts the ID from the URL.

A fetch request retrieves the specific product.

The product is displayed in a centered card layout.

A "Back to Home" link navigates users to the main products page.

🧠 Key Concepts Demonstrated

Dynamic routing

Query parameters handling

Separation between frontend and backend

REST API consumption

Deployment workflow using Git + Render

Production environment debugging

📦 Future Improvements

Add cart functionality

User authentication

Admin dashboard

Database integration (MongoDB / PostgreSQL)

Payment integration

Responsive mobile-first design

👩‍💻 Author

Elinor Davidov
Full-Stack Developer (Junior)
Currently building a Programming Learning Platform 🚀
