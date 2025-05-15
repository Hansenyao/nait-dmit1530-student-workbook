# Exercise - End of Module 2 Review

## Instructions

Your task is to create a fully responsive navigation component. 

When a user with a smaller viewport loads the page, the menu should be closed; however, if the user clicks the menu toggle button, the menu should expand. 

If the user has a larger viewport, the menu toggle button should disappear and the entire navigation should be laid out horizontally. In this larger view, there should also be dropdown menus that expand upon hover and/or focus. 

Your CSS must follow a mobile-first methodology and use top-down logic in order to create a solution that looks as reasonably close to the provided screenshots as possible. 


## Methodology 

1. Change the content of the `author` meta tag in the `<head>` of the HTML.

2. Write the markup for a responsive navigation with the following content: 

```HTML
<!-- Heading -->

<h1><a href="index.html">スタバ Kōhī</a></h1>

<!-- Hamburger Menu -->

<button class="menu">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>menu</title><path d="M4 6h16M4 12h10M4 18h5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    menu
</button>

<!-- Navigation -->

Menu

    Hot Drinks
    Cold Drinks
    Light Fare

Rewards

Locations

    453 Paisley Rd
    183 Shieldhall Rd
    1111 Argyle St
    15 Kilmarnock Rd
    259 Byres Rd
    197 Sauchiehall Ctr

<!-- Sign In / Sign Up -->

<a href="#" class="btn">Sign in</a>
<a href="#" class="btn btn-outline">Join now</a>

```

3. Begin your CSS with the most general or universal styles, followed by utility classes. 

4. Write and complete the styles required for the mobile (smallest) layout. 

5. Write the required JavaScript to toggle the mobile navigation open and closed. 

6. Choose a breakpoint for the media query (for the desktop or 'large' layout). Write the required changes or additions to the styles that you need.


## Task List

As you're working through this exercise, make sure that you complete all of the following tasks: 

1. A single semantic HTML navigation component is used across all viewport sizes. 

2. When a user with a small viewport loads the page, the hamburger menu is closed; similarly, when a user with a large viewport loads the page, the dropdown menus are hidden. 

3. In smaller viewport sizes, the hamburger menu uses a click event and JavaScript to open and close.

4. In larger viewport sizes, the dropdown menus can can be opened and closed using hover and/or focus states. 