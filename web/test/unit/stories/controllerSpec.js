describe("TaskMaster", function() {

    var scope, $httpBackend, ctrl;

    beforeEach(inject(function(_$httpBackend_, $rootScope) {
        scope = $rootScope.$new();
        $httpBackend = _$httpBackend_;
    }));

    describe("Stories Controller", function() {

        var preparedStories = [
            {"_id": "000001", "name": "name 1", "status": "todo", "order": 4},
            {"_id": "000002", "name": "name 2", "status": "todo", "order": 11},
            {"_id": "000003", "name": "name 3", "status": "doing", "order": 3},
            {"_id": "000010", "name": "name 4", "status": "todo", "order": 2},
            {"_id": "000014", "name": "name 5", "status": "todo", "order": 1}];

        beforeEach(inject(function($controller) {
            $httpBackend.expectGET("api/stories/").respond(preparedStories);

            ctrl = $controller(StoriesController, {$scope: scope});
        }));

        it("should initialise scope correctly", function() {
            expect(scope.stories).toBeUndefined();
            $httpBackend.flush();

            expect(scope.stories.length).toEqual(5);
            expect(scope.orderProp).toEqual("order");
        });
    });

    describe("Story Detail Controller", function() {

        var preparedStory = {"_id": "1000", "name": "story name", "status": "todo", "order": 1};

        beforeEach(inject(function($routeParams, $controller) {
            $httpBackend.expectGET("api/stories/1000").respond(preparedStory);
            $routeParams.storyId = "1000";

            ctrl = $controller(StoryDetailController, {$scope: scope});
        }));

        it("should fetch story detail", function() {
            expect(scope.story).toBeUndefined();
            $httpBackend.flush();

            expect(scope.story).toEqual(preparedStory);
        });
    });
});