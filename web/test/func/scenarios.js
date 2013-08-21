describe("TaskMaster", function() {

    describe("- Stories", function() {

        beforeEach(function() {
            browser().navigateTo("/stories.html");
        });

        it("should retrieve stories at the start", function() {
            expect(repeater("li.story").count()).toEqual(5);
        });
    });
});