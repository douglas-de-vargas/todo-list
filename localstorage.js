if (window.localStorage) {
  // Suporte ao localStorage
}

localStorage.setItem()

localStorage.getItem()

localStorage.removeItem();

localStorage.clear();

// Criar item:
let myObj = { name: 'Gabriel', age: 25 };

localStorage.setItem(key, JSON.stringify(myObj));

// Ler item:
let myItem = JSON.parse(localStorage.getItem(key));