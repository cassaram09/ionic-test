function AppController ($scope, postService){

  var vm = this;
  vm.posts = [];
  vm.refresh = refresh;

  activate();

  function activate(){
    GetPosts().then(SetPosts);
  }

  function GetPosts(){
    return postService.getPosts();
  }

  function SetPosts(response){
    console.log(response.posts)
    vm.posts = response.posts;
    $scope.$broadcast("scroll.refreshComplete");
  }

  function refresh(){
    GetPosts().then(SetPosts);
  }



}

angular
  .module('app')
  .controller('appController', AppController)