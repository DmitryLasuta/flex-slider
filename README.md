# Flex Slider

The project is an implementation of a slider that displays content using the flex-grow property. Slide transitions are achieved using **JavaScript**.

### Project Features

Utilizes the Slider class to handle slider functionality.
Slides are represented as elements with the class .slide, nested within an element with the class .slider.
Automatic slide transitions occur every `2500ms` for a seamless user experience.

<!-- TODO: make a gif -->

Pauses slide transitions when the cursor hovers over the slider, resuming when the cursor leaves.
Customizable options for controlling slide speed and animation effects.

### Usage

Create an instance of the `Slider` class, passing in the appropriate slider element (or leave it as the default value if the slider is within an element with the class .slider).
Call the `startSlideshow()` method to initiate the automatic slide transitions.

```javascript
import Slider from './Slider'

// Create a new Flex-Grow Slider instance
const slider = new Slider()

// Start the automatic slide transitions
slider.startSlideshow()
```

### Project Dependencies

The project relies on the following dependencies:

Vite: Used for project bundling
To install the dependencies and run the project, execute the following commands:

```shell
# Install dependencies
$ npm install

# Run the project
$ npm run dev
```

### Achievements in the Project

During the creation of the "Flex Slider" project, you have acquired the following skills:

Using **JavaScript** to create a Slider class that manages the functionality of the slider.
Implementing the automatic transition between slides.
Adding a pause in slide transitions when the cursor is hovered over.
Customizing various parameters, such as slide transition speed and animation effects.
This project has allowed me to practice creating and using JavaScript classes. Using classes helps organize code, making it more modular and easily maintainable.

<!-- [demo](https://dmitrylasuta.github.io/flex-slider/) -->
