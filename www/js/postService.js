function PostService ($http){

  return {
    getPosts: getPosts,
  }

  function getPosts() {
    return $http.get('https://public-api.wordpress.com/rest/v1.1/freshly-pressed/')
      .then(handleResponse)
      .catch(handleError);
  }

  function handleResponse(response){
    return response.data;
  }

  function handleError(error){
    console.log(error);
    alert("there was an error!");
  }

}

angular
  .module('app')
  .service('postService', PostService)