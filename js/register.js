const registro = document.querySelector('#form-register')
registro.addEventListener('submit', (e) =>{
    e.preventDefault()
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const users = JSON.parse(localStorage.getItem('users')) || []
    const isRegister = users.find(user => user.email === email);
    if(isRegister){
        return alert('el usuario ya esta registrado')
    }
 
    users.push({name:name, email:email, password:password})
    localStorage.setItem('users', JSON.stringify(users));
    alert('registro exitoso')
    window.location.href = 'logueo.html'
})