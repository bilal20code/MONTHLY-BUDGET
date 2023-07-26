const btnbtnaddBudget = document.getElementById('btnaddBudget');
const ShowTotalBudget = document.getElementById('ShowTotalBudget');
const totalbudgetinoutfield = document.getElementById('totalbudgetinoutfield');
const ShowTotalExpense = document.getElementById('ShowTotalExp');
const ShowTotalBalance = document.getElementById('ShowTotalBalance');
const btnAddExpense = document.getElementById('btnAddExpense');
const categoryinputfield = document.getElementById('categoryinputfield');
const descrpinputfield = document.getElementById('descrpinputfield');
const expenseinputfield = document.getElementById('expenseinputfield');
const dtpinputfied = document.getElementById('dtpinputfied');
const tblmain = document.getElementById('tblmain');

let SNo = 0;


btnbtnaddBudget.addEventListener('click',()=>{

    if(totalbudgetinoutfield.value == "")
    {
        alert("Please Type Any Budget");
        return;
    }
    if(totalbudgetinoutfield.value.includes('-'))
    {
        alert("Negative Value Not Allowed");
        totalbudgetinoutfield.value = '';
        return;
    }

    ShowTotalBudget.innerText = totalbudgetinoutfield.value;

    ShowTotalBalance.innerText = totalbudgetinoutfield.value;
    totalbudgetinoutfield.value = '';


})

btnAddExpense.addEventListener('click',(event)=>{

    event.preventDefault();
    if(parseInt(ShowTotalBudget.textContent) < 1)
    {
        alert("Please Enter Budget");
        return;

    }

    if((parseInt(expenseinputfield.value)  + parseInt(ShowTotalExpense.textContent)) > parseInt(ShowTotalBudget.textContent ))
    {
        alert("Please Enter Valid Expense ,Total Expense Is Greater Then Total Budget ");
        return;
    }
    if(categoryinputfield.value =='Category'){
        alert("Please Select any category");
        return;
    }
    if(descrpinputfield.value == '')
    {
        alert("Please Enter Description");
        return;
    }
    if(expenseinputfield.value == '')
    {
        alert("Please Enter Expense Amount");
        return;
    }

    if(dtpinputfied.value == '')
    {
        alert("Please Select Date");
        return;
    }

    
    var tblmainrow = document.createElement('tr');

    var tblmainSrnotd = document.createElement('td');
    var tblmaincategorytd = document.createElement('td');
    var tblmaindescrpttd = document.createElement('td');
    var tblmainexpenseAmounttd = document.createElement('td');
    var tblmaindtptd = document.createElement('td');


    tblmainSrnotd.textContent = SNo;
    tblmaincategorytd.textContent =categoryinputfield.value;
    tblmaindescrpttd.textContent =descrpinputfield.value;
    tblmainexpenseAmounttd.textContent =expenseinputfield.value;
    tblmaindtptd.textContent = dtpinputfied.value;

    tblmainrow.appendChild(tblmainSrnotd)
    tblmainrow.appendChild(tblmaincategorytd)
    tblmainrow.appendChild(tblmaindescrpttd)
    tblmainrow.appendChild(tblmainexpenseAmounttd)
    tblmainrow.appendChild(tblmaindtptd)

   
    tblmain.appendChild(tblmainrow)

   
    
    ShowTotalExpense.innerText = parseInt(ShowTotalExpense.textContent) + parseInt(expenseinputfield.value);
    ShowTotalBalance.innerText = parseInt(ShowTotalBalance.textContent) - parseInt(expenseinputfield.value);

    SNo++;

})

function logout() {
    // Add your logout logic here
    // For example, you can redirect the user to the logout page or clear session data.
    // Replace the window.location.href with the actual logout URL.
    window.location.href = "logout.php"; // Replace "logout.php" with your logout endpoint.
  }