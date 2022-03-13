import Recaptcha from "react-google-recaptcha";

function onChange(value){
    console.log ("Capcha value:",value);
}
const User =() => {
    return(
<Recaptcha
sitekey ="6LftedceAAAAADN2XQ_d6gBq6reZ6H_seqfMgyql"
/>

    );
};
  

export default User;