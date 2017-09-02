//got this snippet last night and forgot to note where.
//*Update - Found it: https://stackoverflow.com/questions/8655741/javascript-hide-all-other-divs
// The function assigns particular id's to elements by passing the id's as parameters.
//Then the function determines what the display attribute is set to for the
//parameter/id that was passed, and flips it based on the click.


//store the state of the elements in an object and use that to identify the open ones that need closing..
var divState = {};
//create function that accepts the parameter id
function showhide(id) {
//if statement to make sure this runs, as the parenthesis would resolve as true
    if (document.getElementById) {
//create a variable that contains the parameter that was passed to the function
        var divid = document.getElementById(id);
//check if the stored object matches the parameter passed?
        divState[id] = (divState[id]) ? false : true;
        //close others
        for (var div in divState){
            if (divState[div] && div != id){
                document.getElementById(div).style.display = 'none';
                divState[div] = false;
            }
        }
        divid.style.display = (divid.style.display == 'block' ? 'none' : 'block');
    }
}
document.getElementsByName("chatticket").addEventListener("keyup", updateTicket, true);
document.getElementsByName("esticket").addEventListener("keyup", updateTicket, true);
document.getElementsByName("erone").addEventListener("keyup", updateTicket, true);
 function updateTicket(){
var chatTicket = document.getElementsByName("chatticket")[0].value;
var esTicket = document.getElementsByName("esticket")[0].value;
var erOne = document.getElementsByName("erone")[0].value;

document.getElementById("chattic").innerHTML = chatTicket;
document.getElementById("estic").innerHTML = esTicket;
document.getElementById("ertic").innerHTML = erOne;

}
