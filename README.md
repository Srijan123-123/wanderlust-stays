WanderLust

WanderLust is a full-stack web application for discovering, listing, and booking unique stays.  
This project is being developed as a major learning project.

## 📅 Project Progress

## Day 1 Progress

✅ Work Completed

- Initialized Node.js project
- Installed required dependencies
- Created basic folder structure
- Added `.gitignore` file
- Configured Git and GitHub repository

Project Structure

MAJOR PROJECT/
├── init/
├── models/
├── views/
├── node_modules/
├── app.js
├── package.json
├── package-lock.json
└── .gitignore

---

Tech Stack (Initial Setup)-

- Node.js
- Express.js
- MongoDB (Planned)
- EJS (Planned)

---

Project Status
Development Started (Day 1)

---

## Day 2 Progress

Today I focused on improving the user interface of the Wanderlust project.

✅ Features Implemented

- Added a responsive **Navbar** for easy navigation across pages
- Designed and implemented a **Footer** section
- Created **Listing Cards UI** to display travel destinations in a clean and structured format
- Improved overall layout and styling for better user experience

## Day 3 Progress

- Fixed image rendering issue caused by inconsistent image data structure
- Implemented fallback logic to support multiple image formats
- Added client-side form validations for improved UX
- Implemented server-side validation to ensure secure and reliable data processing
- Enhanced robustness of listing creation workflow

## Day 4 Progress

-Completed review feature with add, show, and delete functionality

### Day 5

Implemented session management and flash messages.

Features added:

- Integrated **express-session** for session handling
- Implemented **connect-flash** for success and error messages
- Added flash notifications for:
  - Creating a new listing
  - Updating a listing
  - Deleting a listing
- Configured middleware to pass flash messages to EJS templates

### Day 6

Implemented **User Authentication UI**.

Features added:

- Created **Signup page**
- Created **Login page**
- Integrated **Passport.js authentication**
- Connected **passport-local-mongoose** with User model
- User login system setup

## Day 7

Implemented Authorization and MVC Architecture

-Authorization Added:

Authorization ensures that only permitted users can perform certain actions.

Features
Only logged-in users can create new listings.
Only the owner of a listing can edit or delete it.
Only logged-in users can add reviews.
Only the author of a review can delete it.
Unauthorized users are redirected with an appropriate flash message.
Example:
If User A creates a listing, User B will not be allowed to edit or delete that listing.

-MVC Architecture Implemented:

The project has been restructured using the MVC (Model–View–Controller) pattern for cleaner and more maintainable code.

wanderlust/
│
├── models/
│ ├── listing.js
│ ├── review.js
│ └── user.js
│
├── controllers/
│ ├── listings.js
│ ├── reviews.js
│ └── users.js
│
├── routes/
│ ├── listing.js
│ ├── review.js
│ └── user.js
│
├── views/
│ ├── listings/
│ ├── reviews/
│ └── users/
│
├── middleware.js
├── app.js
└── package.json

🛠️ Tech Stack
Node.js
Express.js
MongoDB
Mongoose
Passport.js
Express Session
Connect Flash
EJS
Bootstrap

▶️ How to Run

```bash
npm install
node app.js
```
