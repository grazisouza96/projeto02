// Objeto simulado de usuários cadastrados
var users = [
    { username: "usuario1", password: "senha123" },
    { username: "usuario2", password: "abc123" },
    // Adicione mais usuários conforme necessário
];

// validar o formulário de login
function loginUser() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    if (username === "" || password === "") {
        alert("Por favor, preencha todos os campos do formulário de login.");
        return false;
    }

    // Verificar se o usuário está cadastrado
    var user = users.find(function(user) {
        return user.username === username && user.password === password;
    });

    if (user) {
        alert("Login bem-sucedido! Bem-vindo, " + username + "!");
        // Redirecionar para a página de perfil ou outra página após o login
        // window.location.href = "perfil.html";
        return true;
    } else {
        alert("Usuário ou senha incorretos. Por favor, tente novamente.");
        return false;
    }
}

// mostrar o formulário de cadastro
function showSignupForm() {
    document.getElementById("login-box").style.display = "none";
    document.getElementById("signup-box").style.display = "block";
}

// mostrar o formulário de login
function showLoginForm() {
    document.getElementById("signup-box").style.display = "none";
    document.getElementById("login-box").style.display = "block";
}

// validar o formulario de cadastro
function registerUser() {
    var name = document.getElementById("signupName").value;
    var email = document.getElementById("signupEmail").value;
    var phone = document.getElementById("signupPhone").value;
    var username = document.getElementById("signupUsername").value;
    var password = document.getElementById("signupPassword").value;
    var confirmPassword = document.getElementById("signupConfirmPassword").value;

    if (name === "" || email === "" || phone === "" || username === "" || password === "" || confirmPassword === "") {
        alert("Por favor, preencha todos os campos do formulário de cadastro.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("As senhas não coincidem. Por favor, tente novamente.");
        return false;
    }

    // Verificar se o nome de usuário já existe
    var user = users.find(function(user) {
        return user.username === username;
    });

    if (user) {
        alert("Nome de usuário já existe. Por favor, escolha outro.");
        return false;
    }

    // Adicionar o novo usuário 
    users.push({ username: username, password: password });
    alert("Cadastro realizado com sucesso! Você já pode fazer login.");

    // Mostrar o formulário de login e ocultar o formulário de cadastro
    showLoginForm();
    return false;
}

// Função para mostrar/ocultar a chave PIX
function togglePixKey() {
    var paymentMethod = document.getElementById("payment").value;
    var pixKeyDiv = document.getElementById("pix-key");
    if (paymentMethod === "pix") {
        pixKeyDiv.style.display = "block";
    } else {
        pixKeyDiv.style.display = "none";
    }
}
