# Astronomy Picture of the Day (APOD)

### React + TypeScript + Vite

Codepath Project Unit 4 Making API requests and using real data.

## Main Take aways
  - To avoid `CORS Policy Error` caused by using a local development server, a `proxy` configuration inside the `vite.config.ts` file needs to be added. More Info [here](https://vitejs.dev/config/server-options#server-proxy)
  - Importing environment virables is different in `vite` than create-react-app. 

## Installation 
To run this project locally, follow these steps:
``` bash 
git clone https://github.com/redsprites/Codepath-Unit-4-Using-API
cd Codepath-Unit-4-Using-API
npm install
npm run dev
```

## Features Completed
- [x] Clicking a button creates a new API fetch request and displays at least three attributes from the returned JSON data.
- [x] Only one item/API call is viewable at a time
- [x] API calls should appear random to the user
- [x] At least one image is displayed per API call
- [x] Clicking on a displayed value for one attribute adds it to a displayed ban list
- [x] Attributes on the ban list prevent further images/API results with that attribute from being displayed

## GIF Walkthrough
Here's a walkthrough of implemented user stories:
`https://imgur.com/W3XxAFq.gif`

 ![Walkthrough GIF](https://imgur.com/W3XxAFq.gif)