  function addEvents(){
// get the input from the text fields and assign them to a variable that js can handle.
var chatTicket = document.getElementById('chatNumber').addEventListener('keyup', updateTicket, true);
var esTicket = document.getElementById('esticket').addEventListener('keyup', updateTicket, true);
var erOne = document.getElementById('erone').addEventListener('keyup', updateTicket, true);
var myBPid = document.getElementById('myBPID').addEventListener('keyup', updateTicket, true);
var myNAME = document.getElementById('myName').addEventListener('keyup', updateTicket, true);
//
};
 function updateTicket(){
  chatTicket = document.getElementById("chatNumber").value;
  esTicket = document.getElementById("esticket").value;
  erOne = document.getElementById("erone").value;
  myBPid = document.getElementById("myBPID").value;
  myNAME = document.getElementById("myName").value;

  document.getElementById("chattic").innerHTML = chatTicket;
  document.getElementById("estic2").innerHTML = esTicket;
  document.getElementById("estic").innerHTML = esTicket;
  document.getElementById("ertic").innerHTML = erOne;
  if(!localStorage.bpId){
      document.getElementById("bptic").innerHTML = myBPid;
  } else {
    document.getElementById("bptic").innerHTML = localStorage.getItem("bpId");
    document.getElementById("myBPID").placeholder = localStorage.getItem("bpId")
  }
  if(!localStorage.name){
    document.getElementById("myNamePut").innerHTML = myNAME;
  } else {
    document.getElementById("myNamePut").innerHTML = localStorage.getItem("name");
    document.getElementById("myName").placeholder = localStorage.getItem("name");
  };
  };
  function getTab(){
    var chatTabInput = document.getElementById('chatTitle').addEventListener('keyup', chatTab, true);
  };
function chatTab(){
  chatTabInput = document.getElementsByName('chatTitle')[0].value;
  document.title = chatTabInput;
  };
function setInputs(){
    document.getElementById('saveInfo').addEventListener('click', setInputs, true);
    if(!localStorage.name){
    localStorage.setItem("name", document.getElementById("myName").value);
    console.log(localStorage.name);
    };
    if(!localStorage.bpId){
    localStorage.setItem("bpId", document.getElementById("myBPID").value);
    console.log(localStorage.bpId);
    };
  };
  function clearInputs(){
    document.getElementById('clearInfo').addEventListener('click', clearInputs, true);
    if(localStorage.name){
      localStorage.removeItem("name");
      console.log(localStorage.name);
    };
    if(localStorage.bpId){
      localStorage.removeItem("bpId");
      console.log(localStorage.bpId);
    };
  };
addEvents();
getTab();
updateTicket();
chatTab();
setInputs();
clearInputs();
