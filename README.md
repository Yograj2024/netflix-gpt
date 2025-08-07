# netflix GPT 🎬

- create react app using vite
- configured tailwindcss
- create login/signin form ui and setup routing
- Added UI functionality to switch between Sign In and Sign Up forms using React's useState hook.

# Form Validation and Rules
 - JavaScript RegEx based custom validator
 - Validation logic is handled in utils/validate.js

|   Field               |          Validation Rule                                                          |
|-----------------------|-----------------------------------------------------------------------------------|
|  Email                |   Must be in proper format (e.g. user@example.com)                                |
|  Password             |   Min 8 characters, with at least 1 uppercase, 1 lowercase, and 1 digit           |
|  Full Name            |   Must be at least 3 characters (Only required in Sign Up mode)                   |
|  Confirm Password     |   Must match the password (Only required in Sign Up mode)                         |


# Form Authentication (Firebase)
   - Authentication logic is modularized in `helperFunctions.js`
      - Located in: `src/components/Login/helperFunctions.js`
      - `loginLogic()` — handles user sign-in
      - `signUpLogic()` — handles user registration
      - `resetFormValues()` — resets form inputs and clears error state
- Shows meaningful error messages on invalid credentials


   - loginLogic(setErrorMess, email, password)
   - signUpLogic(setErrorMess, fullName, email, password, confirmPassword)
   - resetFormValues(setErrorMess, fieldArr)

# Firebase Setup & Deployment
   - Firebase is used for both **authentication** and **deployment**
   - The app is deployed using **Firebase Hosting**



# Implemented Event List
- onClick           :  Used to handle button clicks for form submission and UI interactions.
- onAnimationEnd    :  Used to remove animation class after effect ends.
- onSubmit          :

# Implemented Hook List
- useState
- useRef


# features :-
- login/sign up page
    - Toggle between Sign In / Sign Up
    - redirect to browser page
    - Firebase Authentication
    - Form validation and error feedback
- Browser Page (after authentication)
    - Header with navigation
    - Movie Hero section
        - tailer in background
        - title and description
        - movie suggestions
            - movies list * n
- netflixGPT 
    - AI-powered search bar
    - movie suggestions 