import styles from './App.module.css';
import {I18Provider, Locale} from './i18n';
import translate from './i18n/translate';

function Nav() {
  return (
    <I18Provider Locale={Locale.FRENCH}> 
    <div class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 h-screen w-full ">
{/* <nav class="h-28 w-full bg-gradient-to-r from-green-400 to-blue-500  text-white relative"> */}
{translate("hello")}
<nav className={styles.Nav} >
    

    <ul class="absolute right-10 flex  space-x-8 mt-4">
   
    <select class="block appearance-none w-38 h-8 px-2 py-2  text-center border-opacity-0 bg-aliceblue px-4 py-2 pr-8 ">
    <option> Utilisateurs</option>
    <option>ajouter un Utilisateur</option>
    <option>mettre a jour un Utilisateur</option>
    <option>supprimer un Utilisateur</option>
    <option>modifier un Utilisateur</option>
  </select>
       
  <select class="block appearance-none w-38 h-8 px-2 py-2  border-opacity-0 bg-aliceblue px-4 py-2 pr-8 text-center">
    <option>Groupe Utilisateurs</option>
    <option>ajouter un Utilisateur</option>
    <option>mettre a jour un Utilisateur</option>
    <option>supprimer un Utilisateur</option>
    <option>modifier un Utilisateur</option>
  </select>
  <select class="block appearance-none w-38 h-8 px-2 py-2  text-center border-opacity-0 bg-aliceblue px-4 py-2 pr-8 ">
    <option>Gestion d'alerte</option>
    <option>ajouter un Utilisateur</option>
    <option>mettre a jour un Utilisateur</option>
    <option>supprimer un Utilisateur</option>
    <option>modifier un Utilisateur</option>
  </select>
      <div class="py-3 space-x-5">
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border bg-white rounded text-black border-black hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Sign up</a>
    </div>
    <div class="py-3 space-x-5">
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border bg-white rounded text-black space-x-5 py-8 border-black hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Sign in</a>
    </div>
    </ul>
    
</nav>
<br></br>
<div class="inner-addon left-addon w-96 space-x-96 py-16 ml-28"> <i class="glyphicon glyphicon-user "></i> <input type="text" class="form-control " placeholder='Search here...' /> </div>
<div class="inline-block relative w-64">


</div>
</div>
</I18Provider>

  ); 
}

export default Nav;