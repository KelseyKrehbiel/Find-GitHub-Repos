// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
//const octokit = new Octokit();
var client = new GitHubClient(new ProductHeaderValue("Find-Github-Repos"));


//response.name to get name of the repos
async function getRepos(username) {
    await octokit.request('GET /users/{username}/repos', {
        username: username
    }).then(console.log(response));
}

function displayRepos(repoList){
    console.log(repoList);
}


function watchForm() {
    //console.log("submitted")
  $('form').submit(event => {
    event.preventDefault();
    console.log($('input').val());
    let username = $('input').val();
    getRepos(username);
  });
}

$(function() {
  //wait for submission
  watchForm();
});