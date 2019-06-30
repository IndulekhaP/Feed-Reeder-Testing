# Project Overview

Test suites written in Jasmine to test a web-based application that reads RSS feeds.


## How to run the tests

Open index.html file in any brower. Test results can be found at the bottom of the page


## Tests
1. Test to make sure that the allFeeds variable has been defined and that it is not empty

2. Test that loops through each feed in the `allFeeds` object and ensures it has a URL defined _and_ that the URL is not empty

3. Test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty

4. Test that ensures the menu element is hidden by default

5. Test that ensures the menu changes visibility when the menu icon is clicked

6. Test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container

 7. Test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes