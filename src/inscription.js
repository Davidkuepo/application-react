import{Table, Button,Modal,Input} from "antd";
import G3 from "./assets/G3.png";
import user from "./User.js";
function inscription() {
    return (
        
<div class="h-screen w-full items-center flex bg-gradient-to-r from-pink-500 to-yellow-500">
    <div class="mx-auto h-96 w-2/3 rounded-2xl flex rounded-lg">
    <div class="h-full w-1/2 bg-white ">
    <center> <img src={G3} class="rounded-full w-72 h-72  border-2 py-0,2 " /></center> 
    <center><label class="italic text-6xl text-red-300">GESCARD</label></center> </div>
    <div class="h-full w-1/2 bg-yellow-300 px-10 space-y-4 py-12">
        <center><label class="text-4xl  text-red-500">User Login</label></center>
    <input type="text" placeholder="username" class="w-full h-10 rounded-xl opacity-75 px-3"></input>
    <input type="email" placeholder="email@gmail.com" class="w-full h-10 rounded-xl opacity-75 px-3"></input>
    <input type="password" placeholder="password" class="w-full h-10 rounded-xl opacity-75 px-3"></input>
    
    <input type="checkbox"></input>  <label>remenber me</label> <br></br>
    <a href="Header"><center><button class=" px-2 py-2 w-72 bg-green-500 text-black text-2xl rounded-lg ">Login</button></center></a>
    <a class="ml-36">vous avez deja un compte ?</a>
    </div>
    </div>

</div>  
  
      );  
  }
  
  export default inscription;