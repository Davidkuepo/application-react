// import './App.css';
import  styles from './App.module.css';
import icon from "./assets/icon.png";
import mail from  './assets/mail.png';
import password from  './assets/password.png';
function inscription() {
  return (
<div class=" h-screen w-full bg-gradient-to-br
                    from-blue-400 via-green-500 
                    to-red-500">

  {/* div derriere la page de connexion */}
<div class="h-38 w-96 bg-sky-300 flex mx-auto rounded-xl py-3">
    {/* page de connexion */}
<div class="bg-gradient-to-r from-green-400 fw-bold text-uppercase to-blue-500 h-26 w-96 bg-emerald-100 mx-auto rounded-xl py-3 " >
<center> <img src={icon} class="rounded-full w-18 h-32  border-2 py-0,2" /></center> 
<center><p CLASS="text-white text-2xl">Sign up</p></center>
 
<div class=""> 
<center><input type="text" placeholder='First name' class="py-0,02 px-8 h-10 border-2 text-center rounded-lg shadow-inner"></input></center>  <img src={icon} class=" w-10 h-10   py-0,02 transform -translate-y-10 rounded-xl transform translate-x-14"/> </div>
<div class=""> 
<center><input type="text" placeholder='Last name' class="py-0,02 px-8 h-10 border-2 text-center  rounded-lg shadow-inner"></input></center>  <img src={icon} class=" w-10 h-10   py-0,02 transform -translate-y-10 rounded-xl transform translate-x-14"/> </div>
 <div class="">
  <center><input type="email" placeholder='email' class="py-0,02  px-8 text-center h-10 border-2 rounded-lg shadow-inner"></input></center> <img src={mail} class=" w-10 h-10   py-0,02 transform -translate-y-10 rounded-xl transform translate-x-14"/> </div> 
  <div class="">
  <center><input type="password" placeholder='password' class="py-0,02 px-8 text-center h-10 border-2 rounded-lg shadow-inner"></input></center> <img src={password} class=" w-10 h-10   py-0,02 transform -translate-y-10 rounded-xl transform translate-x-14"/> </div> 
 <div class="flex justify-start space-x-5 ml-12">
  {/* hover permet de balancer les couleurs lorsqu'on clique sur un element */}
    <a href="Navbar"><button class=" px-2 py-2 w-72 h-10 bg-green-500 hover:bg-blue-700  rounded-lg ">Sign </button> </a> 
    </div>
   <a href="connexion" class="ml-36 h-2 text-blue-900 ml-14">vous avez deja un compte?</a>
   </div>
{/* <div class="flex flex-row ...">
</div> */}
</div>
</div>

  );
}

export default inscription;
