const handleErrors = (response) => {
  if (!response.ok) {
    if (response.message) {
      throw Error(response.message);
    }
    throw Error(response.statusText);
  }
  return response;
};

export const getRepos = (username) => {
  let name = username.trim().toLowerCase();
  if (name === '') {
    return [];
  }
  return fetch(`https://api.github.com/users/${name}/repos`)
    .then(handleErrors)
    .then((response) => {return response.json()})
    .catch((error) => {
      console.error(error);
    });
};

export const getReadme = (url) => {
  let headers = new Headers();
  headers.append('Accept', 'application/vnd.github.VERSION.html');
  return fetch(`${url}/readme`, {headers})
    .then(handleErrors)
    .then((response => {return response.text()}))
    .catch((error) => {
      console.error(error);
    });
}

