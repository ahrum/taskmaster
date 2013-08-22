angular.module("taskmaster", []).
    config(["$routeProvider", function($routeProvider) {
        $routeProvider.
            when("/stories", {templateUrl: "story-list.html", controller: StoriesController}).
            when("/stories/:storyId", {templateUrl: "story-detail.html", controller: StoryDetailController}).
            otherwise({redirectTo: "/stories"});
    }]);