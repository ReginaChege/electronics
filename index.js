// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);

// const getUsers = () => {
//     return fetch('https://dummyjson.com/users')
//       .then(response => response.json())
//       .then(response => response)
//       .catch(error => error);
//   };
//   const displayProducts = async () => {
//     let users = await getProducts();
//     console.log({ users });
//     let userContainer = document.getElementById('products');
//     users.users.map(item => {
//       let div = document.createElement('div');
//       div.className='produce'
//       let img = document.createElement('img');
//       let name = document.createElement('h2');
//       let userName = document.createElement('p');
//       img.src = produce.image;
//       // name.innerHTML = `${item.firstName} ${item.lastName}`;
//       userName.innerHTML = produce.username;
//       div.appendChild(img);
//       div.appendChild(name);
//       div.appendChild(userName);
//       userContainer.appendChild(div);
//     });
//   };
//   displayUsers()