// import './App.css';
import icon from "./assets/icon.png";

function Connexion() {
  return (
   
<div class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 h-screen w-full py-8">
  {/* div derriere la page de connexion */}
<div class="h-38 w-96 bg-sky-300 flex mx-auto rounded-xl py-3">
    {/* page de connexion */}
<div class="bg-gradient-to-r from-green-400 fw-bold text-uppercase to-blue-500 h-26 w-96 bg-emerald-100 mx-auto rounded-xl py-3 " >
<center> <img src={icon} class="rounded-full w-32 h-45  border-2 py-0,2" /></center> 
<center><p CLASS="text-white text-4xl">Sign up</p></center>
<br></br>  
<center><input type="text" placeholder='First name' class="py-0,02 h-12 border-2 rounded-lg shadow-inner"></input></center>
<br></br>  
 <center><input type="text" placeholder='last name' class="py-0,02 h-12 border-2 rounded-lg shadow-inner"></input></center>
 <br></br>  
  <center><input type="email" placeholder='email' class="py-0,02  h-12 border-2 rounded-lg shadow-inner"></input></center>
  <br></br>  
 <center><input type="password" placeholder='password' class="py-0,02 h-12 border-2 rounded-lg shadow-inner"></input></center> 
  <br></br>  
  
 <div class="flex justify-start space-x-5 ml-12">
  {/* hover permet de balancer les couleurs lorsqu'on clique sur un element */}
    <a href="/"><button class=" px-2 py-2 w-72  bg-green-500 hover:bg-blue-700  rounded-lg ">Sign </button> </a> 
   
    </div>
   <a href="Inscription" class="ml-36 text-blue-900 ml-14">vous avez deja un compte?</a>
 
 
   </div>
<div class="flex flex-row ...">
</div>
</div>
</div>

  );
}

export default Connexion;
