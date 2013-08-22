function StoriesController($scope, $http) {

    $http.get("api/stories/").success(function(data) {
        $scope.stories = data;
    });

    $scope.orderProp = "order";
}

function StoryDetailController($scope, $routeParams, $http) {
    $http.get("api/stories/" + $routeParams.storyId).success(function(data) {
        $scope.story = data;
    });
}