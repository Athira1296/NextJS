# NextJS Essentials
===================

- The app folder because that is the most important folder
in a modern NextJS project.

- It's this app folder where you set up your different pages that you want to have on your overall website, and that's why in there, you also find a Page.js file.

- Page.js is a reserved filename just as Layout.js

- And a file named Page.js simply tells NextJS that it should render a page.

- The special thing about this component here just is that it's a so-called server component,a type of component that's not really easily built with just React, but that is embraced and supported by NextJS.

- Now, on the surface, it's a regular component, but NextJS ensures that this component is actually rendered on the server, that this component function is executed on the server.

- Hence, if you, for example, add a console lock statement here where you say executing, you will not see that here on the client side.

- Instead, you can see it on the backend. There, if you open the terminal where you started the development server, you see all these executing logs.

- It is treated as a server component and executed on the server, and it's then the returned JSX code that's sent over the wire to the browser to be rendered as HTML, so to say, and that's why we can see what we see here, thanks to this component.

# Links
=======
- import Link from "next/link";
- <Link href="/about">About us</Link>

# Layout.js file
================
- There also is a layout JS file, and that's actually another reserved file name, another special type of file, where the page JS file defines the content of a page, the layout JS file defines the shell around one or more pages.

- It's the, as the name implies, layout, into which a page will be rendered.

- And every next project needs at least one root layout JS file.

- So, one layout JS file at the top of the app folder. You can also have nested layout JS files.

- This component then uses the standard children prop,mwhich in React can be used by every component, to inject some content between the body tags.

- This component actually renders an HTML and a body tag. So, some elements which you don't normally use in your React components, but you actually need to do that in your next project in the root layout to set up the general HTML skeleton of the website.

- Now, you might wonder where the head element is, which is also typically needed to set a title and some metadata, and that's actually not rendered here because that can be populated in a different way in NextJS by exporting a special variable called metadata.

- So, this is also a reserved name. The component name was not reserved but this here is a reserved name, and if you export a variable or constant with that name, it should contain an object where you can then set the title of the page and the description of the page, and also some other metadata fields, which will then applied to all pages that are covered by that layout.

So, that's why we don't have the head section here, simply because all the content that goes into head is set with that metadata.

- So, layout JS and page JS work together. Layout is the wrapper, page is the actual content, the content that will be injected here.

# Reserved Filenames
====================
- Important: These filenames are only reserved when creating them inside of the app/ folder (or any subfolder). Outside of the app/ folder, these filenames are not treated in any special way.

1. page.js => Create a new page (e.g., app/about/page.js creates a <your-domain>/about page)

2. layout.js => Create a new layout that wraps sibling and nested pages

3. not-found.js => Fallback page for "Not Found" errors (thrown by sibling or nested pages or layouts)

4. error.js => Fallback page for other errors (thrown by sibling pages or nested pages or layouts)

5. loading.js => Fallback page which is shown whilst sibling or nested pages (or layouts) are fetching data

6. route.js => Allows you to create an API route (i.e., a page which does NOT return JSX code but instead data, e.g., in the JSON format)

You also find a list with all supported filenames & detailed explanations in the official docs: https://nextjs.org/docs/app/api-reference/file-conventions

# Dynamic routes 
- Blog
    - [slug] folder - page.js