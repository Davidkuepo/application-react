import carte from  './assets/carte.jpeg';
import rapport from './Page/Service';
import utilisateur from './Page/Utilisateur';
import Service from  './Page/Service';
import groupeutilisateur from './Page/Groupeutilisateur';
import Activite from './Page/Activite';
function Navbar(){
     return(
    <div class="">
<div class="items-center justify-between flex bg-white bg-opacity-100 px-12 py-4 my-4 mx-auto shadow-2xl w-11/12">
    <div class="text-2xl text-white font-semibold inline-flex items-center">
        <img src={carte} class="w-16 mr-4"
            alt="logo-img" />
        <span class="text-blue-400 py-1">GESCARD</span>
    </div>
    <div>
        <ul class="flex text-white">
            <li class="ml-5 px-2 py-1"><a href="Groupeutilisateur">Groupe utilisateur</a></li>
            <li class="ml-5 px-2 py-1"><a href="Utilisateur">Utilisateur</a></li>
            <li class="ml-5 px-2 py-1"><a href="Service">service</a></li>
            <li class="ml-5 px-2 py-1"><a href="Activite">activite</a></li>
            <li class="ml-5 px-2 py-1"><a href="Cotisation">cotisation</a></li>
            <li class="ml-5 px-2 py-1"><a href="Election">election</a></li>
            <li class="ml-5 px-3 py-1 rounded font-semibold bg-gray-100 text-gray-800"><a href="/">Subscribe</a></li>
        </ul>
    </div>
</div>
</div>
     );
 }
 export default Navbar;