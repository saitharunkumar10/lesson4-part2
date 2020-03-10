
// function home_page(){
//     auth('prodadmin@test.com',home_page_secured,'/login')
// }

function home_page(){
    glPageContent.innerHTML ='<h1>Home Page</h1>'
    glPageContent.innerHTML +=`
    <a href='/add' class="btn btn-outline-primary">Add A Product</a>
    <a href='/show' class="btn btn-outline-primary">Show Product</a>
    <button class ="btn btn-outline-danger" type="button" onclick="logOut()">Log out</button>
    <button class ="btn btn-outline-danger" type="button" onclick="googleSignIn()">GSI</button>
    `;
}

async function logOut(){
    try {
        await firebase.auth().signOut()
         window.location.href = '/login'
    } catch (e) {
        window.location.href = '/login'
    }
}



googleSignIn=()=>{
  base_provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().signInWithPopup(base_provider).then(function(result){
    console.log(result)
    console.log("Success.. Google Account Linked")
    window.location = '/home'
  }).catch(function(err){
    console.log(err)
    console.log("Failed to do")
  })
}



