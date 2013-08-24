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

function StoryDetailController($scope, $routeParams, Story) {
    $scope.story = Story.get({id: $routeParams.storyId});
}