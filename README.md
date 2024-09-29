# Project Title: React Products Showcase

![Product Showcase_Screenshot](<images/Screenshot (1180).png>)
![Pagination_Screenshot](<images/Screenshot (1181).png>)
![Category Filtering_Screenshot](<images/Screenshot (1182).png>)

# Description
This project is a simple React application that fetches product data from an external API and displays them with category filtering and pagination features. Users can filter products by category, search for specific items, and navigate through pages to view more products. The application is built using React functional components, Redux for state management, and react-router for navigation.

# Features
1. Fetches product data from DummyJSON API.
2. Displays product categories with single selection filtering.
3. Shows paginated products based on selected category or all products if none selected.
4. Allows searching through products by title.
5. Utilizes Redux for state management of categories, products, and pagination.
6. Stores selected category and search queries in the URL query parameters.

# Technologies Used
1. React (Functional Components)
2. Redux (State Management)
3. React Router
4. Fetch API
5. CSS for styling

# Installation
1. Clone the repository:
git clone https://github.com/your-username/react-products-showcase.git

2. Navigate to the project directory:
cd react-products-showcase

3. Install dependencies:
npm install

4. Start the development server:
npm start

5. Open the application in your browser:
http://localhost:3000

# Project Structure
/src
│
├── /components
│   ├── CategoryList.js         # Category filter list
│   ├── ProductList.js          # Product display with pagination
│   ├── SearchBar.js            # Search component
│   └── PaginationLoader.js     # Pagination controls
│
├── /redux
│   ├── store.js                # Redux store configuration
│   ├── categorySlice.js        # Category filter slice
│   └── productsSlice.js        # Products data slice with pagination
│
├── App.js                      # Main component to display products
├── App.css                     # Styling for the app
└── index.js                    # Application entry point

# How it Works
1. Category Selection: Users can select a category to filter the products. The selected category is stored in the query parameters and handled by Redux.
2. Pagination: Products are paginated, and users can navigate through pages using the pagination component.
3. Search Functionality: Users can search for specific products using the search bar. The search term is also stored in the URL query parameters.
4. State Management: Redux handles the state of products, pagination, and category filtering, ensuring a smooth user experience.
API Used
5. This project fetches product data from the DummyJSON Products API.

# Required Dependencies
1. React
2. Redux
3. React-Redux
4. Redux Toolkit
5. React Router DOM

# Commands to Run
npm start: Starts the development server.
npm build: Builds the project for production.