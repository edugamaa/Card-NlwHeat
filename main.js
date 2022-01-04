function getGitHubInfos() {
  const url = `https://api.github.com/users/edugamaa`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userImage.src = data.avatar_url
      userLink.href = data.html_url
      userName.textContent = data.name
      userLogin.textContent = data.login
      userBio.textContent = data.bio
    })
}

getGitHubInfos()
