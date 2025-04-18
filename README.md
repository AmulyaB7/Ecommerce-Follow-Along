# Ecommerce-Follow-Along
Milestone 1: Project Overview to summarize what was covered in the session
Summary:
     This repository contains the follow-along project for building a full-fledged E-Commerce Application using the MERN stack (MongoDB, Express.js, React.js, and Node.js)
     
Objectives:
      Understand the structure of a MERN stack project.
      Learn how to set up a project repository and organize it.
      Grasp the core features and functionalities of an e-commerce application, such as user authentication, product management, and order handling.

Key features:
    1. User Authentication: Make sure users can securely log in and register with ease. Passwords will be safely hashed, and users will get tokens to stay logged in without needing to enter their credentials every time.
    2. Product Management: Admins will have the power to add, edit, or delete products with all the details like name, price, and description. Shoppers can browse, search, and filter products easily, and every product entry will be double-checked to ensure no mistakes slip through.
    3. Order Handling: Customers can place orders, track their progress (like "Shipped" or "Delivered"), and view their purchase history. Admins will have tools to manage all orders, update their status, and handle requests like cancellations.
    4. Database Schema Design: MongoDB will store all the app's data, from users and products to orders. The database will be thoughtfully structured to link related data 
    5. Frontend Development: The user interface will be built with React.js, ensuring it’s both beautiful and easy to use. From a smooth shopping experience to a dashboard for admins to manage everything, the app will work seamlessly on all devices, big or small.
    6. Backend Development: The backend will handle all the heavy lifting, like processing data, handling business logic, and making sure everything runs smoothly. Node.js and Express.js will keep things robust and scalable, with extra layers of security to protect sensitive data.

**milestone 2**

#### **Key Accomplishments:**

1. **Project Structure:**
   - Organized the project into two main directories: `frontend` for the user interface and `backend` for the server and API logic.
   - Created a clean and modular folder hierarchy to enable scalability and maintainability.

2. **Frontend Setup:**
   - Initialized a React application for building the user interface.
   - Configured **Tailwind CSS** to streamline styling with modern, responsive, and utility-first design principles.
   - Developed the **Login Page**, which includes:
     - A form with input fields for email and password.
     - Utility-based styling for an aesthetically pleasing and responsive layout.
---

#### **Learning Outcomes:**
- **Frontend Development:** Gained hands-on experience with React and Tailwind CSS for building responsive UIs.
- **Project Organization:** Improved project structuring and modularity for future scalability.
- **Version Control:** Practiced committing changes, managing branches, and pushing updates to GitHub.

This project sets a solid foundation for the development of a feature-rich e-commerce platform. Future steps include integrating authentication functionality, building APIs, and adding more user-facing features like product listings and shopping cart functionality.

**milestone3**

### Project Description - Milestone 3  

In **Milestone 3** of the e-commerce application project, the focus shifts to setting up and organizing the backend infrastructure effectively, connecting the server to a database, and implementing basic error handling. This milestone is crucial for establishing a robust and scalable backend architecture for the application.

---

#### **Key Objectives:**  

1. **Backend Folder Structure:**  
   - Organize backend code into dedicated folders for better modularity and maintainability.  
   - Create a structured hierarchy for:  
     - **Routes:** Handles API endpoints for various application features.  
     - **Controllers:** Contains logic for processing requests and sending responses.  
     - **Models:** Defines data schemas for MongoDB using Mongoose.  
     - **Middleware:** Includes reusable functions for tasks like authentication and error handling.  
     - **Utils:** Stores helper functions or utility scripts to streamline backend logic.  

2. **Server Setup:**  
   - Initialize a **Node.js** server using **Express** to handle incoming API requests.  
   - Configure the server to listen on a designated port, enabling communication between the frontend and backend.  

3. **Database Connection:**  
   - Integrate **MongoDB** for efficient data storage and management.  
   - Establish and verify the connection between the server and MongoDB using the **Mongoose** library.  

4. **Error Handling:**  
   - Implement basic error-handling mechanisms to provide clear and actionable error messages.  
   - Ensure the server can handle unexpected issues gracefully and offer better debugging insights.  

---

#### **Learning Outcomes:**  
- **Backend Architecture:** Learn how to organize backend files into a scalable and modular structure.  
- **Database Integration:** Gain hands-on experience connecting and interacting with MongoDB.  
- **Server Configuration:** Understand how to set up a functional Node.js server with Express.  
- **Error Management:** Learn to implement basic error-handling techniques to improve server reliability.  

---

This milestone lays the foundation for the backend by setting up an efficient architecture, enabling database interactions, and ensuring error resilience. These skills will be invaluable as you progress toward building complex backend functionalities and APIs in future milestones. 

---
**milestone4**

### Project Description - Milestone 4  

In **Milestone 4** of the e-commerce application project, the focus is on building the foundation for user management, enabling file uploads, and improving backend functionality. This milestone introduces the **User Model**, **User Controller**, and **Multer** for file handling, enhancing the backend's ability to manage user data and user-uploaded files effectively.  

---

#### **Key Objectives:**  

1. **Create a User Model:**  
   - Define how user data will be stored in the MongoDB database.  
   - Use Mongoose to create a **User Schema**, which acts as a blueprint for the user data.  
   - Include attributes such as:  
     - `name` (string): Stores the user's full name.  
     - `email` (string): Stores the user's email address.  
     - `password` (string): Stores the hashed password for security.  
     - `profileImage` (string): Stores the URL or path to the user’s uploaded profile picture.  
     - `createdAt` (date): Records the time when the user account was created.  

2. **Create a User Controller:**  
   - Develop functions to manage user-related actions, such as:  
     - **Add User:** Handle user registration by storing their details in the database.  
     - **Get User Information:** Retrieve user data for features like profile display.  
     - **Update User Data:** Allow updates to user information like name, email, or profile image.  
   - These controllers will act as the logic layer for handling requests and sending responses related to user data.  

3. **Enable and Configure Multer for File Uploads:**  
   - Set up **Multer** to enable the application to handle file uploads.  
   - Configure Multer to:  
     - Accept files like images (e.g., profile pictures).  
     - Define the destination folder where uploaded files will be stored.  
     - Set file size limits and validate file types for security.  

---

#### **Learning Outcomes:**  
- **Data Modeling:** Understand how to define and use schemas to structure data in MongoDB.  
- **Controllers:** Learn how to write server-side logic to handle and respond to user-related requests.  
- **File Handling:** Gain hands-on experience with Multer for managing file uploads in a Node.js backend.  
- **Documentation:** Improve skills in writing clear and informative README files to document project progress.  

---

This milestone focuses on enhancing the backend’s capability to manage user data and file uploads, setting the stage for integrating user profiles, authentication, and other advanced features in future milestones.

**milestone 5**

# Sign-Up Page

## Description
This project includes a **Sign-Up Page** built using **React** and **Tailwind CSS**. The form allows users to register by providing their **Name, Email, and Password**. It includes **form validation** to ensure proper input before submission.

## Features
- **User-friendly form** with Name, Email, and Password fields.
- **Validation checks:**
  - Name is required.
  - Email must be in a valid format.
  - Password must be at least 6 characters long.
- **Error messages** for invalid input.
- **Clean and responsive UI** with Tailwind CSS.


**milestone 6**

in milestone 6 
Understand how to encrypt the passwords before saving.
Know how to store complete user data securely in the database.
Protect User Data: Keeps passwords safe if hackers access the database.
Privacy: Ensures user passwords aren’t visible to anyone.
Compliance: Follows security laws like GDPR and PCI-DSS.
Stops Password Theft: Encrypted passwords can’t be easily stolen or guessed.

Encrypt the Password:

Use bcrypt to hash the user's password during signup.
Save the hashed password in the database instead of plain text.
Store Complete User Data:

Save all the user's data (e.g., name, email, etc.) in the database while ensuring that the password remains encrypted.

## milestone 7
updated login.jsx and user.js(controller)
installed axios using (npm i axios)
updated login details in user.js

## milestone 8

Learned how to create a card component.
Learned how to display those cards on the products page.
created home.jsx in pages and product.jsx in controller

## milestone 9

**creating a product form**
configured state management to handle form inputs efficiently.
Validated user inputs before submission to ensure accurate product data. 

## milestone 10

**Product Schema**
Define the structure of product data (e.g., name, description, price, image URL) using Mongoose. -Ensure each field has proper validation (e.g., required fields, correct data types).

**Endpoint Creation**
Build a POST endpoint to receive product data.
Validate and save the product details to MongoDB.

**Validation**
Ensures that only valid data is saved in the database, maintaining data integrity and preventing errors.

## milestone 11
to write an endpoint that will send data from extract and send data from mongodb.
to receive data at frontend -How to display that data dynamically using product card created earlier.

Wrote an endpoint that will send all products data to frontend In frontend write an function to get all the data Display these data dynamically passing to product card component

## milestone 12
Wrote an endpoint that will send all products with user mail to frontend In frontend write an function to get all the data Display these data dynamically passing to product card component

to write an endpoint that will send data by filtering with my mail and send data from mongodb.
to receive data at frontend -How to display that data dynamically using product card created earlier.

## milestone 13


**Milestone 13: Modifying Data Through API Using API Client**  

#### **Overview**  
In this milestone, I implemented the functionality to edit previously uploaded products. This involved:  
- Creating an API endpoint to update existing product data in MongoDB.  
- Adding an "Edit" button to each product card in the frontend.  
- Autofilling the form with the existing product details when editing.  
- Allowing users to modify and save the updated details.  

#### **Implementation Details**  
1. **Backend: API Endpoint for Updating Data**  
   - Created a new route in the backend to handle `PUT` requests for updating a product in MongoDB.  
   - Used Mongoose to find the existing product by its ID and update the fields with the new values.  

2. **Frontend: Edit Button and Auto-fill Form**  
   - Added an "Edit" button on the product card.  
   - When clicked, it fetches the product details and pre-fills the form.  
   - Users can modify the data and submit it to update the product.  

3. **Database: Updating Product Details**  
   - Integrated the update API with MongoDB to modify the existing product entry based on user input.  


## milestone 14
**Milestone 14: Deleting Data Through API Using API Client**  

#### **Overview**  
In this milestone, I implemented the functionality to delete products from MongoDB. This involved:  
- Creating an API endpoint to delete a product by its ID.  
- Adding a "Delete" button to each product card in the frontend.  
- Sending the product ID to the backend when the delete button is clicked.  
- Removing the deleted product from the UI dynamically.  

#### **Implementation Details**  
1. **Backend: API Endpoint for Deleting Data**  
   - Created a new `DELETE` route in the backend.  
   - Used Mongoose to find and remove a product by its ID in MongoDB.  

2. **Frontend: Delete Button and API Call**  
   - Added a "Delete" button on each product card.  
   - When clicked, it sends the product ID to the backend via an API request.  
   - After a successful deletion, the product is removed from the UI without requiring a page refresh.  

3. **Database: Removing Product Entry**  
   - Integrated the delete API with MongoDB to remove the specified product permanently.  

# Milestone 15

we will create and Navbar component and add nav component to every screen.
-How to create and Nav component.
-How to reuse the same component in multiple pages.

# Milestone 16

we will create an product info page that display all the product data and choose quantity and add to card button.
-How to new page to display each product.
-How to add quantity and add to card button

# Milestone 17

we created an backend endpoint to add products to cart and store in database.
-Edit the user schema to store cart products .
-Write an end point to receive the product details and store in database.



# Milestone 18

we will create an Backend endpoint for the cart page.
We will write the backend logic to fetch all the products inside user cart to display in cart page.
-Create an endpoint to receive request from cart page.
-Create an backend endpoint to fetch all the products inside cart with user mail.

## Milestone 19

### **Assignment Summary: Building a Cart Page with Quantity Updates**  

In this assignment, you successfully implemented a **shopping cart** feature with real-time quantity updates using both **frontend (React)** and **backend (Node.js/Express.js)**.


   - Fetched cart products from the backend (`GET /cart`).  
   - Displayed **product image, name, price, and quantity**.  
   - Added **`+` and `-` buttons** to increase or decrease quantity.  
   - Used **Axios** to communicate with the backend.  


   - Created an **endpoint (`GET /cart`)** to send cart data to the frontend.  
   - Developed an **endpoint (`POST /cart/update`)** to update product quantity.  
   - Ensured that the **quantity updates dynamically** without a page refresh.  

 **Implemented State Management**  
   - Used **React useState & useEffect** to manage cart items.  
   - Updated cart data in real-time after modifying quantity.  

## Milestone 20

Create and backend endpoint that will send all the user data using mail.
Create an frontend profile page that will display all the user data
display profile photo, name, mail and addresses.

## Milestone 21

Milestone 21 - Address Form Page
Project Overview
In this milestone, we created a frontend page for adding an address, allowing users to input and store their address details. The form includes fields for country, city, address lines, zip code, and address type, with basic validation and navigation.

📜 Features Implemented
✔️ Created a React component (AddressForm.jsx) for the address input form.
✔️ Used React state (useState) to store form input values.
✔️ Implemented React Router (useNavigate) to navigate from the profile page.
✔️ Added validation to ensure required fields are filled.
✔️ Created a dropdown for selecting address type (Home/Office).
✔️ Logged the submitted data for further backend integration.

## Milestone 22

Milestone 22 - Backend Endpoint for Storing Address
Project Overview
In this milestone, we created a backend API endpoint to store user addresses in the database. The endpoint receives address details from the frontend and updates the user's profile by adding the address to an array in the user collection.

📜 Features Implemented
✔️ Created a POST API endpoint (/api/users/:userId/address) to receive address data.
✔️ Integrated MongoDB (Mongoose) to store the address inside the user profile.
✔️ Used Express.js to handle backend routes and requests.
✔️ Implemented error handling for request validation and database operations.
✔️ Ensured the address is stored inside the address array of the user collection.


## Milestone 23

# Milestone 23: Implementing Order Placement and Address Selection
 Learning Goals 🎯
 By the end of this milestone, you will:
 
 Add a "Place Order" button inside the cart page.
 Create a Select Address Page where users can choose a delivery address.
 Write a Mongoose schema to store order details in the database.
 1. Frontend Updates: Cart Page & Address Selection
 Added a "Place Order" button inside the cart page.
 When clicked, it navigates to the Select Address Page.
 Displayed all saved addresses for the user.
 Allowed users to select an address for order delivery.
 2. Backend Updates: Order Schema & Storage
 Created a Mongoose schema to store order details, including:
 User ID (to associate orders with users)
 Product details (items in the cart)
 Selected delivery address
 Order status (pending, shipped, delivered)
 Total price
 Timestamp
 Implemented an endpoint to store orders in the database.

 # Milestone 24
 
 Learning Goals 🎯
By the end of this milestone,

We will create an order conformation page.
Steps for Milestone 24📝
First we will display all the products we are ordering
Next we will display the address user selected to deliver
We will display the total value of the cart
We will have an place order button at the bottom.

## milestone 25

Milestone 25: Place Order Endpoint

Implemented a backend endpoint for placing orders.
The endpoint receives user email, retrieves _id, and processes orders for each product.
Stored order details in MongoDB using the previously created Order schema.

# Milestone 26

You need to create an endpoint that will receive the user mail
You will get the mail of the user using that you need to retrive the _id of the user
Using that _id you need to get all the orders of that user

# Milestone 27

Milestone 27 - My Orders Page
Project Overview
In this milestone, we created a My Orders page to display all user orders by fetching data from the backend.

Key Features Implemented
✔️ Created a new page myOrders.jsx to display user orders.
✔️ Integrated the GET request to fetch orders from the /my-orders endpoint.
✔️ Passed the user's email as a parameter to retrieve their orders.
✔️ Displayed all orders dynamically in the frontend.
✔️ Added the My Orders page to the navbar for easy navigation.


# Milestone 28

Milestone 28 - Cancel Order Feature
Project Overview
In this milestone, we implemented the ability for users to cancel their orders from the My Orders page and created a backend API to handle order cancellations.

Key Features Implemented
✔️ Added a Cancel Order button for each order in myOrders.jsx.
✔️ Ensured the button is not displayed for already canceled orders.
✔️ Created a new backend endpoint /cancel-order to handle cancellation requests.
✔️ Sent the order ID to the backend and updated the order status to "canceled".
✔️ Saved the updated order status in the database.

# Milestone 29

Milestone 29 - Integrating PayPal Payment Gateway
Project Overview
In this milestone, we started integrating an online payment system into our application using the PayPal API. We have also provided users with the option to choose between Cash on Delivery (COD) or Online Payment.

Key Features Implemented
✔️ Created a PayPal Developer Account and set up a sandbox account.
✔️ Retrieved and stored the PayPal Sandbox Client ID for future integration.
✔️ Updated the Order Confirmation Page (orderConfirmation.jsx):

Added radio buttons to select between COD and Online Payment.

Displayed the PayPal button when "Online Payment" is selected (button implementation will be done in the next milestone).



# Milestone 30: PayPal Payment Integration & Navigation Enhancements

In this milestone, we successfully integrated PayPal for seamless online payments and improved the application's navigation.

Key Highlights:

PayPal Integration: Configured a sandbox account, installed react-paypal-js, and implemented PayPal's API for secure transactions.
Navigation Component: Built a responsive Nav component with React Router for smooth navigation across key pages (Home, My Products, Add Product, Cart).
Responsive Design: Used CSS Flexbox and media queries to ensure adaptability across all screen sizes, with a hamburger menu for mobile users.


# Milestone 31: Implementing Global State Management with Redux
In this milestone, we focused on integrating Redux to manage user email globally, ensuring seamless state management across the application.

Key Achievements:

State Management: Configuring Redux Store

Installed the react-redux NPM package to enable centralized state management.
Created a new store folder containing:
store.js: Configured the Redux store with a userReducer to handle the global email state.
userActions.js: Defined a setEmail action to update the email in the global state.
Integration with React Application

Wrapped the App component inside the Provider component in index.js, passing the store as a prop to ensure global access to the email state.