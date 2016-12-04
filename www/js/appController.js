function AppController ($scope, postService){

  var vm = this;

  vm.refresh = function(){
    return postService.getPosts();
  }

}

angular
  .module('app')
  .controller('appController', AppController)