function showRepositories() {
  var repos = JSON.parse(this.responseText);
  console.log(repos);
<<<<<<< HEAD
  
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + ' - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>`;
  
=======

  const repoList = `<ul>${repos.map(r => '<li>' + r.name + ' - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>`;

>>>>>>> 9326c01e03b628fb1d8514bd8eef6d86a4f24ce2
  document.getElementById('repositories').innerHTML = repoList;
}

function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories);
  req.open('GET', 'https://api.github.com/users/octocat/repos');
  req.send();
}

function getCommits(el) {
  const name = el.dataset.repo;
<<<<<<< HEAD
  
  const req = new XMLHttpRequest();
  
  req.addEventListener('load', showCommits);
  req.open('GET', 'https://api.github.com/repos/octocat/' + name + '/commits');
  
=======

  const req = new XMLHttpRequest();

  req.addEventListener('load', showCommits);
  req.open('GET', 'https://api.github.com/repos/octocat/' + name + '/commits');

>>>>>>> 9326c01e03b628fb1d8514bd8eef6d86a4f24ce2
  req.send();
}

function showCommits() {
  const commits = JSON.parse(this.responseText);
<<<<<<< HEAD
  
  const commitsList = `<ul>${commits.map(commit => '<li><strong>' + commit.author.login + '</strong> - ' + commit.commit.message + '</li>').join('')}</ul>`;
  
  document.getElementById('commits').innerHTML = commitsList;
}
=======

  const commitsList = `<ul>${commits.map(commit => '<li><strong>' + commit.author.login + '</strong> - ' + commit.commit.message + '</li>').join('')}</ul>`;

  document.getElementById('commits').innerHTML = commitsList;
} 
>>>>>>> 9326c01e03b628fb1d8514bd8eef6d86a4f24ce2
