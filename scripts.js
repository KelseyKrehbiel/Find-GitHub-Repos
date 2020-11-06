// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
const octokit = new Octokit();
//var client = new GitHubClient(new ProductHeaderValue("Find-Github-Repos"));


//response.name to get name of the repos
async function getRepos(username) {
    console.log("getting repos");
    await octokit.request('GET /users/{username}/repos', {
        username: username
    }).then(userData => {
        console.log("i got something");
        //console.log(userData.data);
        if (userData.status === 200){
            console.log("passed check")
            //console.log(userData.data);
            displayRepos(userData.data);
        }
        else{
            console.log(userData.statusText);
        }
    });
}

function displayRepos(repoData){
    console.log(repoData);
    $('.repos').remove();
    console.log(repoData.length)
    let repoList = ""
    for(let r = 0; r < repoData.length; r++){
        repoList += `<p class="repos"><a href="${repoData[r].html_url}">${repoData[r].name}</a></p>`
    }
    $('main').append(repoList);
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