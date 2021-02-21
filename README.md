# Notes regarding this project

I decided to add a few notes here to explain some of the decisions regarding how this app is currently structured.

    - I added routing mostly to make this project easily extendable more so than because it was necessary and chose to lazy load pages for performance reasons (if the pages were to grow in complexity, anyway).

    - Form.js is a separate component that's imported into Main.js because this allows Main.js to grow with the addition of future components if desired down the road. Otherwise Form.js would have wound up as the page instead of a component in the page for Main.js.

    - Form.js uses a class component instead of a functional component mainly due to the number of state attributes in it. I was leaning towards a functional component but it seems like functional components would either require separate methods for updating each state attribute or would otherwise need to use a method that updated the entire state for the component, at least based on the documentation I read. And since there are several state attributes it seemed like it was probably going to be less code to just write it as a class in that case. I'd love to hear whether or not this is correct as I probably would have otherwise written this as a functional component and just used hooks as needed otherwise. 

    - Currently there is only minimal validation to ensure inputs at least have something typed in them before the form can be submitted. Better validation and stricter rules on what the inputs will allow would be necessary for a real form like this that was not just a quick demo.

    - Right now you can navigate to the '/success' page route through the nav bar if you know the path. Were this app to be built upon I would add Redux and a state store with a boolean variable that would be set to true upon form submit. The '/success' page route would be conditionally locked by a check against this boolean in the index.js file. As a result, the route would only be available if you had successfully completed the registration form.  

    - I am not sure if I would choose to use Emotion as my primary way to attach css to components. It was just the first library I tried to do this with and I would instead compare libraries using a project specifically for that purpose were I to choose one in particular over others for a project.

    - I used Prime React with its associated base theme, classes and flex module because I'm already familiar with the Angular version (PrimeNG) and it was a quick and easy way to ensure a nice look and feel along with a set of solid library components.

    - There are currently no unit tests because at the moment, that's outside the scope of this demo.

    - I'm using strict mode with React because the app was set up with it by default and I felt it wouldn't hurt to have that in place though it could easily be removed if needed in the future.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.