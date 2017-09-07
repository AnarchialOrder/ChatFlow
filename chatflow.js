
var divState = {};
function showhide(id) {
    if (document.getElementById) {
        var divid = document.getElementById(id);
        divState[id] = (divState[id]) ? false : true;
        for (var div in divState){
            if (divState[div] && div != id){
                document.getElementById(div).style.display = 'none';
                divState[div] = false;
            }
        }
        divid.style.display = (divid.style.display == 'block' ? 'none' : 'block');
    }
}
// get the input from the text fields and assign them to a variable that js can handle.
var chatTicket = document.getElementsByName('chatticket').addEventListener('keyup', updateTicket, true);
var esTicket = document.getElementsByName('esticket').addEventListener('keyup', updateTicket, true);
var erOne = document.getElementsByName('erone').addEventListener('keyup', updateTicket, true);
var myBPid = document.getElementsByName('myBPID').addEventListener('keyup', updateTicket, true);
var myNAME = document.getElementsByName('myName').addEventListener('keyup', updateTicket, true);
//
 function updateTicket(){


chatTicket = document.getElementsByName("chatNumber")[0].value;
esTicket = document.getElementsByName("esticket")[0].value;
erOne = document.getElementsByName("erone")[0].value;
myBPid = document.getElementsByName("myBPID")[0].value;
myNAME = document.getElementsByName("myName")[0].value;

document.getElementById("chattic").innerHTML = chatTicket;
document.getElementById("estic2").innerHTML = esTicket;
document.getElementById("estic").innerHTML = esTicket;
document.getElementById("ertic").innerHTML = erOne;
document.getElementById("bptic").innerHTML = myBPid;
document.getElementById("myNamePut").innerHTML = myNAME;

}
var chatTabInput = document.getElementsByName('chatTitle').addEventListener('keyup', chatTab, true);
function chatTab(){
  chatTabInput = document.getElementsByName('chatTitle')[0].value;
  document.title = chatTabInput;

}

chatTab();
