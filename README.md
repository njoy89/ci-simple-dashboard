# Used technologies & libraries

The solution employs ReactJS + redux. I used the following libraries:

- redux - the application has to deal with complex state, redux *really* helps to manage it in predictable and easily
    testable way.
- bootstrap, font awesome - CSS framework that helped me to quickly UI prototyping (buttons, modal windows, icons)
- bourboun - CSS framework, the main advantage for this project were mixins for cross-browser flexbox support
    and linear gradient
- NodeJS, express - I wrote a simple NodeJS server that serves index.html and items data (that are displayed on
    the table on the UI)
- lodash - a library that provides with util functions
- moment - a library that facilitates dealing with dates
- recharts - a library that renders the pie chart that should be displayed for build statuses
- redux-saga - cool library that allows to handle async redux actions better. `./client/sagas/itemsSaga.js` implements
    fetching data from the server.
- whatwg-fetch - polyfill for window.fetch

- babel - a transpiler for a new JavaScript (ES6)
- chai, mocha, enzyme, sinon - utils used for unit testing

# Pulling items data

The UI fetches items data every 3 seconds (network latency is simulated: 1 second length).
All consecutive responses are situated in ./server/controllers/mocks/*.json. There are 10 defined responses
(10 json files), which means that the UI will be receiving new data for 40 second from the first launch.

# Comments

1. I didn't take icons (a desktop icon, a building icon) from the mockups, because I wanted to have the icons being
   scalable. In the professional life, I would ask a product designer / graphic designer for scalable files like
   *.png or *.svg.
2. Unit tests cover all React components and redux logic.
3. Unfortunately I tested the UI only on latest Chrome, Firefox and Safari. Currently I don't have VMs with old IE
   on my Mac.
4. Unfortunately I didn't add any animations. Please feel free to ask me to add them, if it's possible.
5. I wasn't really sure what actually means the orange colour on "Unit Test" and "Functional Test" charts.
   I believe the mockups clearily suggest that it cannot refer to the failed tests, because the whole item
   (build/pull request) has been accepted. I assumed it refers to the skipped tests. Green colour refers to the passed
   tests, red to failed tests.
6. ... the project was fun, time-consuming though :) Looking forward to hearing back from you!

# Development

`cd Code\ Folder/`
`npm install`
`npm run dev-server`
`npm run webpack-server`
`navigate to http://localhost:3000/`

# Production, project presentation

`cd Code\ Folder/`
`npm install`
`npm run prod-server`
`navigate to http://localhost:3000/`

# Preparing production bundle

`cd Code\ Folder/`
`npm install`
`npm run build`
and run the `prod-server` and check out the new code version on `http://localhost:3000/`.

# Running unit tests

`cd Code\ Folder/`
`npm install`
`npm run test`

# Video

The video was recorded by Nimbus Screenshot & Screen Video Recorder plugin for Chrome. The file is in *.webm format.
You can check the shorter version out on https://nimbus.everhelper.me/client/notes/share/747424/1plw121bvd5ngouko12f.

# Demo

The project has been deployed on [AWS EC2 instance](http://ec2-35-167-218-181.us-west-2.compute.amazonaws.com:9001/).
