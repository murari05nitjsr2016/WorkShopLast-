
window.addEventListener('DOMContentLoaded', (event) => {

/*validating first name :
 *Must starts with capital letter , can accept space character and must have minimum three characters
 */
    const fullname = document.querySelector('#fullName');
    const textError = document.querySelector('.text-error');
    fullname.addEventListener('input', function () {
        if (fullname.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new Contact()).fullName = fullname.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });


/**Validating phone number
*Mobile no should be in 2 digit space 10 digit formate.
*/

    const phoneNo = document.querySelector('#tel');
    const phoneError = document.querySelector('.mobile-error');
    phoneNo.addEventListener('input', function () {
        if (phoneNo.value.length == 0) {
            phoneError.textContent = "";
            return;
        }
        try {
            (new Contact()).phoneNumber = phoneNo.value;
            phoneError.textContent = "";
        } catch (e) {
            phoneError.textContent = e;
        }
    });

/**Validating address 
* must have multiple words and each word with min 3 characters
*/
    const address = document.querySelector('#address');
    const addressError = document.querySelector('.address-error');
    address.addEventListener('input', function () {
        if (address.value.length == 0) {
            addressError.textContent = "";
            return;
        }
        try {
            (new Contact()).address = address.value;
            addressError.textContent = "";
        } catch (e) {
            addressError.textContent = e;
        }
    });

}); 

const save = () => {
    try{
      let contact = saveData();
      createAndUpdateStorage(contact);
    }catch(e){
      return;
    }
 };

 function saveData(){
    let contact = new Contact();
    contact._fullName = getInputValueById('#fullName');
    contact._address = getInputValueById('#address');
    contact._phoneNumber = getInputValueById('#tel');
    contact._city = getInputValueById('#city');
    contact._state = getInputValueById('#state');
    contact._zip = getInputValueById('#zip');
 }


















