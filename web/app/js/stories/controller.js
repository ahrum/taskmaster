function StoriesController($scope, Story) {

    $scope.stories = Story.query();
    $scope.orderProp = "order";

    $scope.sortBy = function(prop) {
        if (prop === $scope.orderProp) {
            $scope.orderProp = ($scope.orderProp.charAt(0) === '-') ? prop : "-" + prop;
        } else {
            $scope.orderProp = prop;
        }
    };
}

function StoryDetailController($scope, $routeParams, Story, $location) {

    $scope.story = Story.get({id: $routeParams.storyId});

    $scope.save = function() {
        $scope.story.$update();
    };

    $scope.delete = function() {
        $scope.story.$delete();
        $location.path("/");
    };
}

function NewStoryController($scope, Story, $location) {

    $scope.story = new Story({status: "todo"});

    $scope.create = function() {
        $scope.story.$save(function (data, headersGetter) {
            $location.path("/stories/" + data._id);
        });
    };
}
