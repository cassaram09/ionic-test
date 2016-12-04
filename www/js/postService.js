function PostService ($http){

  var vm = this;

  this.getPosts = function(){
    $http({
      method: 'GET',
      url: 'https://public-api.wordpress.com/rest/v1.1/freshly-pressed/'
      }).then(function successCallback(response) {
        console.log(response.data.posts);
        return response;
      }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  }

}

angular
  .module('app')
  .service('postService', PostService)