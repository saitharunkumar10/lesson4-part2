
    googleSignIn=(req, res)=>{
      base_provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(base_provider).then(function(result){
        console.log(result)
        console.log("Success.. Google Account Linked")
        window.location.href = '/'
      }).catch(function(err){
        console.log(err)
        console.log("Failed to do")
      })
    }
    
    
    
    