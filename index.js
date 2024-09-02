function getcountries() {
    var _url = 'https://jsonplaceholder.typicode.com/users';
    fetch(_url)
      .then(response => response.json())
      .then(data => {
        var _users = document.getElementById('users');
        data.forEach(user => {
            var option = document.createElement('option');
            option.innerHTML = user.name;
            _users.appendChild(option);
        });
      });
}
