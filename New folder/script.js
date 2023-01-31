var row =1;

var submit = document.getElementById("submit");
          submit.addEventListener("click",displayDetails);
          

          function displayDetails(){
                var email = document.getElementById("email").value;
                var name = document.getElementById("name").value;
                var fname = document.getElementById("fname").value;
                var contact = document.getElementById("contact").value;

                if (!email || !name || !fname || !contact){
                    alert("Please fill all Details");
                    return;
                }
                var display = document.getElementById("display");

                var newRow = display.insertRow(row);

                var cell1 = newRow.insertCell(0);
                var cell2 = newRow.insertCell(1);
                var cell3 = newRow.insertCell(2);
                var cell4 = newRow.insertCell(3);
               
                cell1.innerHTML = email;
                cell2.innerHTML = name ; 
                cell3.innerHTML = fname;
                cell4.innerHTML = contact;

                row++;
                document.getElementById("email").value = "";
                document.getElementById("name").value = "";
                document.getElementById("fname").value = "";
                document.getElementById("contact").value = "";

          }