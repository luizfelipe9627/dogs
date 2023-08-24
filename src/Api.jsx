export const API_URL = "https://dogsapi.origamid.dev/json"; // Criado uma constante chamada API_URL que contém o endereço principal da API.

// Criado uma função chamada TOKEN_POST responsável por fazer a requisição para a API para criar o token.
export function TOKEN_POST(body) {
  return {
    url: API_URL + "/jwt-auth/v1/token", // Define o endereço da API que faz a requisição para criar o token.
    options: {
      // O method é o método da requisição.
      method: "POST", // Define o método como POST, ou seja, está enviando os dados para a API.
      // O headers é um objeto que contém os cabeçalhos da requisição.
      headers: {
        // O cabeçalho Content-Type informa o tipo de conteúdo que está sendo enviado no corpo da requisição.
        "Content-Type": "application/json", // Define o cabeçalho como application/json, ou seja, o corpo da requisição é um objeto JSON.
      },
      body: JSON.stringify(body), // Define o corpo da requisição com o método JSON.stringify que transforma o objeto passado no parâmetro body em uma string JSON.
    },
  };
}

// Criado uma função chamada TOKEN_VALIDATE_POST responsável por fazer a requisição para a API para validar o token.
export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + "/jwt-auth/v1/token/validate", // Define o endereço da API que faz a requisição para criar o token.
    options: {
      // O method é o método da requisição.
      method: "POST", // Define o método como POST, ou seja, está enviando os dados para a API.
      // O headers é um objeto que contém os cabeçalhos da requisição.
      headers: {
        // O cabeçalho Authorization informa que o corpo da requisição é um token.
        Authorization: "Bearer " + token, // Define o cabeçalho como Bearer + token, ou seja, o corpo da requisição é um token.
      },
    },
  };
}

// Criado uma função chamada USER_GET responsável por fazer a requisição para a API para puxar os dados do usuário.
export function USER_GET(token) {
  return {
    url: API_URL + "/api/user", // Define o endereço da API que faz a requisição para puxar os dados do usuário.
    options: {
      // O method é o método da requisição.
      method: "GET", // Define o método como GET, ou seja, está puxando os dados do usuário.
      // O headers é um objeto que contém os cabeçalhos da requisição.
      headers: {
        // O cabeçalho Authorization informa que o corpo da requisição é um token.
        Authorization: "Bearer " + token, // Define o cabeçalho como Bearer + token, ou seja, o corpo da requisição é um token.
      },
    },
  };
}

// Criado uma função chamada USER_POST responsável por fazer a requisição para a API para criar o usuário.
export function USER_POST(body) {
  return {
    url: API_URL + "/api/user", // Define o endereço da API que faz a requisição para enviar o usuário criado.
    options: {
      // O method é o método da requisição.
      method: "POST", // Define o método como POST, ou seja, está enviando os dados para a API.
      // O headers é um objeto que contém os cabeçalhos da requisição.
      headers: {
        // O cabeçalho Content-Type informa o tipo de conteúdo que está sendo enviado no corpo da requisição.
        "Content-Type": "application/json", // Define o cabeçalho como application/json, ou seja, o corpo da requisição é um objeto JSON.
      },
      body: JSON.stringify(body), // Define o corpo da requisição com o método JSON.stringify que transforma o objeto passado no parâmetro body em uma string JSON.
    },
  };
}

// Criado uma função chamada PHOTO_POST responsável por fazer a requisição para a API para criar a foto.
export function PHOTO_POST(formData, token) {
  return {
    url: API_URL + "/api/photo", // Define o endereço da API que faz a requisição para enviar a foto.
    options: {
      // O method é o método da requisição.
      method: "POST", // Define o método como POST, ou seja, está enviando os dados para a API.
      // O headers é um objeto que contém os cabeçalhos da requisição.
      headers: {
        // O cabeçalho Authorization informa que o corpo da requisição é um token.
        Authorization: "Bearer " + token, // Define o cabeçalho como Bearer + token, ou seja, o corpo da requisição é um token.
      },
      body: formData, // Define o corpo da requisição com o formData que contém os dados da foto que será enviada para a API.
    },
  };
}

// Criado uma função chamada PHOTO_POST responsável por fazer a requisição para a API para criar a foto.
export function PHOTOS_GET({ page, total, user }) {
  return {
    url: `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`, // Define o endereço da API que faz a requisição para puxar as fotos.
    options: {
      // O method é o método da requisição.
      method: "GET", // Define o método como GET, ou seja, está puxando os dados do usuário.
      cache: "no-store", // Define que não será armazenado em cache.
    },
  };
}

// Criado uma função chamada PHOTO_GET responsável por fazer a requisição para a API para puxar os dados da foto.
export function PHOTO_GET(id) {
  return {
    url: `${API_URL}/api/photo/${id}`, // Define o endereço da API que faz a requisição para puxar os dados da foto.
  };
}

// Criado uma função chamada COMMENT_POST responsável por fazer a requisição para a API para enviar o comentário.
export function COMMENT_POST(id, body) {
  return {
    url: `${API_URL}/api/comment/${id}`, // Define o endereço da API que faz a requisição para enviar o comentário.
    options: {
      // O method é o método da requisição.
      method: "POST", // Define o método como POST, ou seja, está enviando os dados para a API.

      // O headers é um objeto que contém os cabeçalhos da requisição.
      headers: {
        // O cabeçalho Content-Type informa o tipo de conteúdo que está sendo enviado no corpo da requisição.
        "Content-Type": "application/json", // Define o cabeçalho como application/json, ou seja, o corpo da requisição é um objeto JSON.
        // O cabeçalho Authorization informa que o corpo da requisição é um token.
        Authorization: "Bearer " + window.localStorage.getItem("token"), // Define o cabeçalho como Bearer + token, ou seja, o corpo da requisição é um token que está sendo pego do localStorage.
      },

      body: JSON.stringify(body), // Define o corpo da requisição com o método JSON.stringify que transforma o objeto passado no parâmetro body em uma string JSON.
    },
  };
}

// Criado uma função chamada PHOTO_DELETE responsável por fazer a requisição para a API para deletar a foto.
export function PHOTO_DELETE(id) {
  return {
    url: `${API_URL}/api/photo/${id}`, // Define o endereço da API que faz a requisição para enviar o comentário.
    options: {
      // O method é o método da requisição.
      method: "DELETE", // Define o método como DELETE, ou seja, está deletando os dados para a API.

      // O headers é um objeto que contém os cabeçalhos da requisição.
      headers: {
        // O cabeçalho Authorization informa que o corpo da requisição é um token.
        Authorization: "Bearer " + window.localStorage.getItem("token"), // Define o cabeçalho como Bearer + token, ou seja, o corpo da requisição é um token que está sendo pego do localStorage.
      },
    },
  };
}

// Criado uma função chamada PASSWORD_LOST responsável por fazer a requisição para a API para enviar o email para recuperar a senha.
export function PASSWORD_LOST(body) {
  return {
    url: `${API_URL}/api/password/lost`, // Define o endereço da API que faz a requisição para recuperar a senha.
    options: {
      // O method é o método da requisição.
      method: "POST", // Define o método como POST, ou seja, está enviando os dados para a API.

      // O headers é um objeto que contém os cabeçalhos da requisição.
      headers: {
        // O cabeçalho Content-Type informa o tipo de conteúdo que está sendo enviado no corpo da requisição.
        "Content-Type": "application/json", // Define o cabeçalho como application/json, ou seja, o corpo da requisição é um objeto JSON.
      },

      body: JSON.stringify(body), // Define o corpo da requisição com o método JSON.stringify que transforma o objeto passado no parâmetro body em uma string JSON.
    },
  };
}
