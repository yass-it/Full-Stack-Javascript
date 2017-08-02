<!DOCTYPE html>
<html>
<head>
  <title>Hayat page</title>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="/css/style.css">
  <link rel="stylesheet" type="text/css" href="/css/materialize.min.css">
</head>
<body>

  <nav  id="navbar" class="black darken-2" role="navigation">
    <div  class="nav-wrapper container">
      <a id="logo-container" href="#" class="brand-logo"><img src="/images/image2.png"></a>
      <ul id='ul1' class="right hide-on-med-and-down">
           <li><a href="/">How It Works</a></li>
      <% if(!currentUser){ %>
           <li><a href="/signup">Sign Up</a></li>
           <li><a href="/login"> Log In</a></li>
      <%  } else{ %>
          <li><a href="#" >Signed In As <%= currentUser.username%></a></li>
          <li ><a href="/logout">Log Out</a></li>
        
      <% }%> 
       
      </ul>
       
      <ul id="nav-mobile" class="side-nav black darken-2">
         
          <li><a href="/">How It Works</a></li>
        <% if(!currentUser){ %>
          <li><a href="/signup">Sign Up</a></li>
           <li><a href="/login"> Log In</a></li>
        <%  } else{ %>
          <li><a href="#" >Signd In As <%= currentUser.username%></a></li>
          <li><a href="/logout">Log Out</a></li>
      <% }%> 
     
      </ul> 
      <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons white-text">menu</i></a> 
      
    </div>
    </nav>
  

      <div class="row main-content">
      <form class="col m8 offset-m2">
        <div class="row">
        <h4 id="text-form" class="white-text">How is my family?</h4>
          <div class="input-field col s5">
            <input class="white-text" id="input_text" type="text" data-length="30">
            <label class="white-text" id="input_text_label" for="input_text">Where are they from?</label>
            <button id="button-form" type="submit" class="btn waves-effect black darken-2" name="Submit" id="submit">GO<i class="material-icons right">send</i></button>
          </div>
        </div>

      </form>
    </div>



  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script type="text/javascript" src="/scripts/init.js"></script>
  <script type="text/javascript" src="/scripts/materialize.min.js"></script>
</body>
</html>