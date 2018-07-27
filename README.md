# Project Overview

This project's implementation will show the utility of setting up a testing instrument for web's code. The project has one <strong>Index.html</strong> document, that sets the main structure, a main <strong> style.css </strong> document, that is adjusting main styles proprieties, one <strong>app.js</strong> document, manipulating the style and html content and one jasmine document <strong>feedreader.js</strong> that contains the testing code. 


The Html document is a page that links in the main page a list of useful articles! Check them out!

Load the <strong>Index.html</strong> in a browser, you will notice in the footer of the page the specs for every test! Feel free to open the Jasmine <strong>feedreader.js</strong> to check on the test. You can modify in the <strong>app.js</strong> some elements and see how the status of the tests is changing




# What is testing the feedreader.js document ?


1. The suit "RSS feed" -test "are defined"  loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.

2. The suit "RSS feed" -test "element are URL and not empty" loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.

3. The suit "RSS feed" -test "element are name and not empty" loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.

4. The suit "the menu" -test "The menu is hidden by default"  ensures the menu element is hidden by default.

5. The suit "the menu" -test "menu changes visibility on click" ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.

6. The suit "Initial Entries" -test "there is at least one entry at the execution" ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.

7. The suit "New Feed Selection" -test "loads new feeds" ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.

The test don't dependents on the results of another.
Callbacks are used to ensure that feeds are loaded before they are tested.
