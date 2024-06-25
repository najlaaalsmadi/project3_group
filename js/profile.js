document.addEventListener("DOMContentLoaded",function(){

    let userData = JSON.parse(sessionStorage.getItem('logged-in-user'));

    let name = userData.firstName + " " + userData.lastName ;
    console.log(userData)
    console.log(userData.LastName)

    document.getElementById('name').innerHTML = name;
    document.getElementById('role').innerHTML = userData.role;
    document.getElementById('email').innerHTML = userData.email;
    document.getElementById('phone').innerHTML = userData.phone;
    document.getElementById('about').innerHTML = userData.about;
    document.getElementById('location').innerHTML = userData.location;
    document.getElementById('profile-picture').src = userData.img ;
    console.log(userData.img);

});