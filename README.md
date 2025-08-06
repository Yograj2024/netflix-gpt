# netflix GPT

- create react app using vite
- configured tailwindcss
- create login/signin form ui and setup routing
- Added UI functionality to switch between Sign In and Sign Up forms using React's useState hook.

- form validation 
    - JavaScript RegEx based custom validator
# Form Validation and Rules
# Validation logic is handled in utils/validate.js

|   Field               |          Validation Rule                                                          |
|-----------------------|-----------------------------------------------------------------------------------|
|  Email                |   Must be in proper format (e.g. user@example.com)                                |
|  Password             |   Min 8 characters, with at least 1 uppercase, 1 lowercase, and 1 digit           |
|  Full Name            |   Must be at least 3 characters (Only required in Sign Up mode)                   |
|  Confirm Password     |   Must match the password (Only required in Sign Up mode)                         |



# Implemented Event List
- onClick           :  Used to handle button clicks for form submission and UI interactions.
- onAnimationEnd    :  Used to remove animation class after effect ends.
- onSubmit          :

# Implemented Hook List
- useState
- useRef


# features :-
- login/sign up page
    - sign in/ sign up form
    - redirect to browser page
- browser (after authentication)
    - header
    - main movie
        - tailer in background
        - title and description
        - movie suggestions
            - movies list * n
- netflixGPT 
    - search bar
    - movie suggestions 