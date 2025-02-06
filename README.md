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