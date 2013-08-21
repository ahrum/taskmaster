describe("Stories Controller", function() {

    var scope, ctrl;

    beforeEach(function() {
        scope = {};
        ctrl = new StoriesController(scope);
    });

    it("should initialise scope correctly", function() {
        expect(scope.stories.length).toEqual(5);
        expect(scope.orderProp).toEqual("order");
    });
});