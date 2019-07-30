const data = document.querySelector("#data");
const input = document.querySelector("#box");

input.addEventListener('keyup', ev=>{
    const inputStr = document.getElementById('box').value;
    
    const apiURL = 'https://acme-users-api-rev.herokuapp.com/api/users/search/';
    if(inputStr){
    fetch(`${apiURL}${inputStr}`)
    .then(response => response.json())
    .then(searchData =>{
        const usersArr = searchData.users;
        const info = usersArr.map(user => {
return `<div class= 'line'><img src = ${user.avatar}><div id = 'f'>${user.firstName}</div><div id = 'l'>${user.lastName}</div> <div>${user.email}</div> <div id = 'tit'>${user.title}</div></div>`    
        } 
        )
        const html = info.join(' ');
        data.innerHTML = html;
    })
}
})

const clearSearch = document.getElementById('clear');

clearSearch.addEventListener('click', ev =>{
    data.innerHTML = '';
})