angular.module("taskmaster", ["filters", "services"]).
    config(["$routeProvider", function($routeProvider) {
        $routeProvider.
            when("/stories/", {templateUrl: "story-list.html", controller: StoriesController}).
            when("/stories/new", {templateUrl: "story-new.html", controller: NewStoryController}).
            when("/stories/:storyId", {templateUrl: "story-detail.html", controller: StoryDetailController}).
            otherwise({redirectTo: "/stories"});
    }]);

angular.module("filters", []).
    filter("checkmark", function() {
       return function(input) {
           var suffix = input === "done" ? "\u2713" : "\u2718";
           return input + " " + suffix;
       };
    });

angular.module("services", ["ngResource"]).
    factory("Story", function($resource) {
        return $resource("api/stories/:id", {id: "@_id"}, {update: {method: "PUT"}});
    });
