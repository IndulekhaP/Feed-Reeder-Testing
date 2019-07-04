$(function() {
    describe('RSS Feeds', function() {
        /* Tests to make sure that allFeeds variable has been defined 
         * and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it ('all feeds have URL', function() {
             for(feed of allFeeds){
                  expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            }
        });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it ('all feeds have name', function() {
             for(feed of allFeeds){
                  expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            }
        });
    });


    describe('The menu', function(){
        const menuIcon = $('.menu-icon-link');
        /* Test that ensures the menu element is
         * hidden by default.
         */
        it('is hidden by default', function(){
            expect($('body').attr('class')).toBe('menu-hidden');
        });

         /* Test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changes visibility when the menu icon is clicked', function(){
            // Click once
            menuIcon.trigger("click");
            expect($('body').hasClass('menu-hidden')).toBe(false);


            // Click again
            menuIcon.trigger("click");
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function(){
        const container = $('.feed');
        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
         beforeEach(function(done){
             loadFeed(0, function(){
                 done();
             });
         });

         it('has at least a single entry', function(done){
             expect($('.feed .entry').length).not.toEqual(0);
             done();
         });
    });         
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
        const container = $('.feed');
        let firstFeed, secondFeed;

        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
         beforeEach(function(done){
             loadFeed(0, function(){
                 firstFeed = $('.feed').html();
                 done();
             });
             loadFeed(1, function(){
                 secondFeed = $('.feed').html();
                 done();
             });
         });
         it('changes the content', function(done){
             expect(secondFeed === firstFeed).not.toBe(true);
             done();
         });
    });
}());
