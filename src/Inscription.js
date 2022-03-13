import icon4 from "./assets/icon4.jpeg";

function Inscription() {
    return (
        <div class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 h-screen w-full py-8">
        {/* div derriere la page de connexion */}
      
      <div class="h-98 w-96 bg-sky-300 flex mx-auto rounded-xl py-8">
           
          {/* page de connexion */}
      <div class="bg-gradient-to-r from-green-400 to-blue-500 h-98 w-72 bg-emerald-100 mx-auto rounded-xl py-3 " >
      <center> <img src={icon4} class="rounded-full w-32 h-45  border-2 py-0,2" /></center> 
     <center><p CLASS="text-white text-4xl border-blue">Sign up</p></center>
    <br></br>
        <center><input type="email" placeholder='email' class="py-2  h-8 w-48 border-2 rounded-lg shadow-inner"></input></center>
        <br></br>  
       <center><input type="password" placeholder='password' class="py-2 h-8 w-48 border-2 rounded-lg shadow-inner"></input></center> 
       <input type="checkbox" class="ml-8"></input> <label>Remenber me</label>
        <br></br>  
        <br></br>
       <div class="flex justify-start space-x-5 ml-16 ">
        {/* hover permet de balancer les couleurs lorsqu'on clique sur un element */}
       <a href="User"><button class=" px-2 py-2 bg-blue-500 hover:bg-green-700 border-0,2 border-blue rounded-lg ">connexion </button></a>    
          <button class=" px-2 py-2 bg-green-500 hover:bg-blue-700 border-0,2 border-blue rounded-lg ">Delete </button>
       
        
          </div>
      </div>
  </div>
  <br></br>
          <p class="text-center text-gray-500 text-xs space-x-5 ml-64">
    &copy;2022 KDG Corp. All rights reserved.
  </p>
         
  </div>

  
      );  
  }
  
  export default Inscription;