# netflix GPT 🎬

26:54

- create react app using vite
- configured tailwindcss
- create login/signin form ui and setup routing
- Added UI functionality to switch between Sign In and Sign Up forms using React's useState hook.
- implemented sign/in,up locgic
- show user profile 

##  Tech Stack

- **Frontend**: React (via Vite), TailwindCSS  
- **Routing & State**: React Router, Redux Toolkit  
- **Auth & Hosting**: Firebase  
- **API Integrations**: TMDB for movie data, YouTube for video background, GPT for search  
- **Custom Hooks**: Modular hooks for fetching movies, trailers, and AI-powered search

# Implemented Event List
- onClick           :  Used to handle button clicks for form submission and UI interactions.
- onAnimationEnd    :  Used to remove animation class after effect ends.
- onSubmit          :


# Implemented Hook List
- useState
- useRef
- useNavigate (from react router)
- useDispatch (from redux)


# Form Validation and Rules
 - JavaScript RegEx based custom validator
 - Validation logic is handled in utils/validate.js

|   Field               |          Validation Rule                                                          |
|-----------------------|-----------------------------------------------------------------------------------|
|  Email                |   Must be in proper format (e.g. user@example.com)                                |
|  Password             |   Min 8 characters, with at least 1 uppercase, 1 lowercase, and 1 digit           |
|  Full Name            |   Must be at least 3 characters (Only required in Sign Up mode)                   |
|  Confirm Password     |   Must match the password (Only required in Sign Up mode)                         |
|  Image URL            |   Must be a valid image link (Only required in Sign Up mode)                      |


# Form Authentication (Firebase)
  - implement sign in user api
  - Authentication logic is modularized in helperFunctions.js
  - `Located in`: src/components/Login/helperFunctions.js
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


# ⚛️ Redux Integration
  - Added Redux Toolkit to manage global state
  - Auth state (like login info) is now stored in the Redux store
  - Once the user logs in, they are automatically navigated to `/browse route`

# Access Control Fix
- Problem  
  - Users able to access the `/login` page even after logging in.  
  - Users could access the `/browse` page even after logging out.

# How to Fix it  
- Fixed this by using `useEffect` to control route access.  
- Moved the access control logic to a global component (`Header`) to handle route protection more effectively.
- unscribed to the onAuthStateChanged callback 

## After login, user is navigated to `/browse`.
  - Browse Page Layout & Design start

# ✅ Build Hero section 
  - Registered on **TMDB (The Movie Database)** and obtained an **API Access Token**.
  - Fetched movie data from TMDB API and integrated it into the app.
  - Added **background video** in the Hero section for a cinematic feel.
    - Embedded **YouTube video** in the Hero section and made it:
      - Full width & height
      - Autoplay
      - Muted
      - Looping
  - Created a new folder `customhooks` and implemented:
    - `useGetMoviesList` → Custom hook to fetch and manage movies list.
    - `useMovieTrailer` → Custom hook to fetch and manage movie trailer data.
  - Displayed movie details dynamically in the Hero section.

- **Implemented Conditional CSS Styling for Hero Section**  
  Applied dynamic height and background styling to the `<header>` element based onbased on two state variables 
  -  user → whether a user is logged in
  -  gpt  → whether GPT mode is active 
  <header
    className={`relative ${headerAfterCss}
      ${!user ? "after:h-[37.95rem]" : gpt ? "after:h-[37.95rem]" : "after:h-[47.9rem]"}
      ${user ? (gpt ? "" : "h-[47.9rem]") : ""}
      ${(!user || (user && gpt)) && `${headerBeforeCss}`}
    `}
  >
**Logic Table**
| **User**   | **GPT**  | `after` height | `header` height | Extra CSS? (`headerBeforeCss`) |
|-------- ---|----------| -------------- |-----------------|--------------------------------|
| ❌ No     | ❌ No    | 37.95rem       | (none)          |  ✅ Yes                       |
| ❌ No     | ✅ Yes   | 37.95rem       | (none)          |  ✅ Yes                       |
| ✅ Yes    | ❌ No    | 47.9rem        | 47.9rem         |  ❌ No                        |
| ✅ Yes    | ✅ Yes   | 37.95rem       | (none)          |  ✅ Yes                       |
                   


# ✅ Build Main section 
  - Created a main folder to better organize UI components.
  - Inside the main folder, added three new components:
    - Main.jsx → Renders multiple MoviesRow sections such as Trending and Top Rated.
    - MoviesRow.jsx → Displays a title and list of movies.
    - MovieCard.jsx → Renders individual movie posters.
  - Created a new custom hook:
    - useTopRated.js → Fetches Top Rated Movies from TMDB API and stores them in Redux using addTopRatedMovie.
  - Updated Redux Store (moviesListSlice) to include a new topRatedMovie state and corresponding action to store fetched top-rated movies.
  - Data Fetching & Store Update
    - useTopRated.js runs on mount, calls the TMDB Top Rated Movies API, and dispatches addTopRatedMovie() to update the store.
  - Main Component Flow
    - Main.jsx uses useSelector to fetch nowPlayingMovies and topRatedMovie from Redux.
    - MoviesRow.jsx renders the title and passes the movie list to MovieCard.
    - Passes each movie list to MoviesRow.

- **Create Slider**
  - **Added slider functionality** in `MoviesRow.jsx`
  - **Used callback functions** to pass ref from `MovieCard` to `MoviesRow` for better control
    - `useRef` to track scroll container
    - **`moveOn_X(scroll_distance)` function** to scroll horizontally with smooth animation 
      - `How to work moveOn_X `:-
        1. **Receives** a scroll distance value (`+1040` for right, `-1040` for left)
        2. Checks if `scrollRef.current` (the movie list container) exists
        3. Calls `scrollBy` to move horizontally by the given distance
      - Connected to **Left** and **Right** button click events:
        - Left button → `moveOn_X(-1040)`
        - Right button → `moveOn_X(1040)`


# Build GPT search page :-
- **Designed GPT Search Page UI**  
  Created a visually appealing and responsive search page for GPT search functionality.





# features :-
- login/sign up page
    - Toggle between Sign In / Sign Up
    - redirect to browser page
    - Firebase Authentication
    - Form validation and error feedback
    - added user image and userName display after sign up
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