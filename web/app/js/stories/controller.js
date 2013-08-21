function StoriesController($scope) {
    $scope.stories = [
        {_id: "000001", name: "name 1", status: "todo", order: 4},
        {_id: "000002", name: "name 2", status: "todo", order: 11},
        {_id: "000003", name: "name 3", status: "doing", order: 3},
        {_id: "000010", name: "name 4", status: "todo", order: 2},
        {_id: "000014", name: "name 5", status: "todo", order: 1}];

    $scope.orderProp = "order";
}