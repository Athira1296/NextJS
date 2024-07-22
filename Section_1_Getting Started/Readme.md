# Introduction to Next JS

- Inspecting the page source in your browser reveals the code and actual page content.
- The visible content on the screen is part of the HTML code sent from the server.
- This differs from a standard client-side React app, where the source code shows an empty page with script imports, but not the visible content.
- Standard React apps manipulate the page on the client side in the browser.
- React.js runs in the browser, allowing the page to be edited after loading without fetching a new page.
- The disadvantage is that search engine crawlers don't see the actual page content on their first visit.
- With NextJS, the content is included in the source code, visible both on the screen and in the HTML.
- NextJS is a full-stack application framework, running code on both the client and server.
- NextJS seamlessly blends client-side and server-side code, allowing React to build full-stack applications.

# File based routing in next js
- Create a folder awesome inside app folder
- Inside the awesome folder we can have the component to render, should be named "page.js"
- http://localhost:3000/awesome - will roure to this new component

# Two different approaches for building next JS apps
- Pages router 
    * Older approach
    * Very stable
    * Used in many existing projects
    * Allows us to build feature rich full stack apps with React
- App router
    * New way, came up with Next JS 13
    * Marked as stable recently, modern way
    * Supports mordern full stack features
    * The future of Next JS

# Reference
- NextJS Essentials: https://github.com/mschwarzmueller/nextjs-complete-guide-course-resources
- Rest of the Course: https://github.com/mschwarzmueller/nextjs-course-code