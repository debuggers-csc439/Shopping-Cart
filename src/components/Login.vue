<template>
<div>
<div class="sidenav">
         <div class="login-main-text">
            <p>Login or register for Checkout.</p>
         </div>
      </div>
      <div class="main">
         <div class="col-md-6 col-sm-12">
            <div class="login-form">
               <form>
                  <div class="form-group">
                     <label>User Name</label>
                     <input type="text" class="form-control" placeholder="User Name">
                  </div>
                  <div class="form-group">
                     <label>Password</label>
                     <input type="password" class="form-control" placeholder="Password">
                  </div>
                  <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#myModal">Login</button>
                            <div class="modal fade" id="myModal" role="dialog">
                                <div class="modal-dialog modal-sm">
                                <div class="modal-content">
                                    <div class="modal-header">
                                    <h4 class="modal-title">LogIn</h4>
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    
                                    </div>
                                    <div class="modal-body">
                                    <p>Successfully Logged In.</p>
                                    </div>
                                    <div class="modal-footer">
                                    <router-link to="/" type="button" class="btn btn-sucess">Back to Shopping </router-link>   
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                                </div>
                            </div>

                     <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#myRegister">Register</button>
                            <div class="modal fade" id="myRegister" role="dialog">
                                <div class="modal-dialog modal-sm">
                                <div class="modal-content">
                                    <div class="modal-header">
                                     <h4 class="modal-title">Register</h4>
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                   
                                    </div>
                                    <div class="modal-body">
                                    <p>Successfully Registered.</p>
                                    </div>
                                    <div class="modal-footer">
                                    <router-link to="/" type="button" class="btn btn-sucess">Back to Shopping </router-link>   
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                         

               </form>
            </div>
         </div>
      </div>
    </div>
</template>

<script>
</script>
<style>
body {
    font-family: "Lato", sans-serif;
}



.main-head{
    height: 150px;
    background: #FFF;
   
}

.sidenav {
    height: 100%;
    background-color: #000;
    overflow-x: hidden;
    padding-top: 20px;
}


.main {
    padding: 0px 10px;
}

@media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
}

@media screen and (max-width: 450px) {
    .login-form{
        margin-top: 10%;
    }

    .register-form{
        margin-top: 10%;
    }
}

@media screen and (min-width: 768px){
    .main{
        margin-left: 40%; 
    }

    .sidenav{
        width: 40%;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
    }

    .login-form{
        margin-top: 80%;
    }

    .register-form{
        margin-top: 20%;
    }
}


.login-main-text{
    margin-top: 20%;
    padding: 60px;
    color: #fff;
}

.login-main-text h2{
    font-weight: 300;
}

.btn-black{
    background-color: #000 !important;
    color: #fff;
}
</style>