import icon4 from "./assets/icon4.jpeg";
import mail from  './assets/mail.png';
import password from  './assets/password.png';
function connexion() {
    return (
        
        <div class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 h-screen w-full py-8">
        {/* div derriere la page de connexion */}
      
      <div class="h-98 w-96 bg-sky-300 flex mx-auto rounded-xl py-8">
           
          {/* page de connexion */}
      <div class="bg-gradient-to-r from-green-400 to-blue-500 h-98 w-72 bg-emerald-100 mx-auto rounded-xl py-3 " >
      <center> <img src={icon4} class="rounded-full w-32 h-45  border-2 py-0,2" /></center> 
     <center><p CLASS="text-white text-4xl border-blue">Sign up</p></center>
    <br></br>
     <div class="">
        <center><input type="email" placeholder='Email' class="py-2 px-5 h-10 w-48  rounded-xl "></input></center><img src={mail} class=" w-6 h-6 py-0,2 transform -translate-y-8  transform translate-x-14"/> </div>
        <br></br>  
        <div class="">
       <center><input type="password" placeholder='password' class="py-2 px-5 h-10  w-48  text-center rounded-xl "></input></center> <img src={password} class=" w-6 h-6   py-0,2 transform -translate-y-8  transform translate-x-14"/> </div>
       <input type="checkbox" class="ml-8"></input> <label>Remenber me</label>
        <br></br>  
        <br></br>
       <div class="flex justify-start space-x-5 ml-16 ">
        {/* hover permet de balancer les couleurs lorsqu'on clique sur un element */}
       <a href="Navbar"><button class=" px-2 py-2 bg-blue-500 hover:bg-green-700 border-0,2 border-blue rounded-lg ">connexion </button></a>    
          <button class=" px-2 py-2 bg-green-500 hover:bg-blue-700 border-0,2 border-blue rounded-lg ">Delete </button>
  
          </div>
      </div>
  </div>



 
          <p class="text-center text-gray-500 text-xs space-x-5 ml-64">
    &copy;2022 KDG Corp. All rights reserved.
  </p>
         
  </div>

  
      );  
  }
  
  export default connexion;