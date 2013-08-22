describe("TaskMaster", function() {

    describe("- Stories", function() {

        beforeEach(function() {
            browser().navigateTo("/stories.html");
        });

        it("should retrieve stories at the start", function() {
//            pause();
            expect(repeater("li.story").count()).toEqual(5);
        });

        it("should filter stories by filter term", function() {
            input("query").enter("doing");
            expect(repeater("li.story").count()).toEqual(1);

            input("query").enter("todo");
            expect(repeater("li.story").count()).toEqual(4);
        });
    });
});