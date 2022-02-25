# DESCRIPTION

A demo portfolio website that showcases one's projects using important properties in React like states, props component life cycle methods.

# TO RUN THE PROJECT

1. Clone this repository
2. Move to folder
3. Install node modules by `npm install`
4. Run the projects with `npm start`

# UNDERSTANDING THE PROJECT/COMPONENT STRUCTURE

1. App.js :- Main component that encapsulates the other 4 components
2. Navbar.js :- The first component. Provides a navbar to the app
3. Hero.js :- The second component. Uses the hero image as a background, just below the navbar
4. About.js :- The third component. Below the hero image.
5. Projects.js :- The fourth component that consists of the row with a title and lists of projects.
6. ProjectCard.js :- Individual cards that can be reused inside the Project component.

# OTHER IMPORTANT FILES

1. data.js :- Contains the data displayed in the ProjectCard as an array of objects.
2. index.css :- Contains the styles for the entire project

# THINKING WITH REACT

1. Each element on the webapp can be taken as an individual component. EG The navabar is a seperate component with its own file, the About text is also a seperate component.
2. The Project rows seem very similar in nature. They only differ in the project title ( Academic , Individual or Group) and the project data. Hence the title can be passed as props to the Project component.
3. The ProjectCards inside the Project component are also very similar to each other and only differ in the Ttile, Image url and description which can again be passed as props to the Project cards enabling us to resuse these cards.

# IMPORTANT REACT CONCEPTS

## STATES

In the About.js, the view more/ view less feature has been implemented with React States. The HTML is being conditionally rendered, depending on the value of the state. The toggler function helps us toggle between the 2 states by negating its value. Everytime the state changes, the component with render again.

## PROPS

The ProjectCard component can be reused as each project can have a project card. It will only differ in title, description and image url which can be passed as props to that component.

## COMPONENT LIFECYCLE METHODS

The componentDidMount method is used

