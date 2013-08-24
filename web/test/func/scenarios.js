describe("TaskMaster", function() {

    describe("- Stories", function() {

        beforeEach(function() {
            browser().navigateTo("/stories.html");
        });

        it("should retrieve stories at the start", function() {
            expect(repeater("tr.story").count()).toEqual(81);
        });

        it("should filter stories by filter term", function() {
            input("query").enter("doing");
            expect(repeater("tr.story").count()).toEqual(6);

            input("query").enter("todo");
            expect(repeater("tr.story").count()).toEqual(71);
        });
    });
});