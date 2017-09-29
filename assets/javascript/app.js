$(document).ready(function(){

  var config = {
    apiKey: "AIzaSyBWG42WDqMRUxnkqyVTW3LCKJXQf-2bWuE",
    authDomain: "employee-tracker-e1f25.firebaseapp.com",
    databaseURL: "https://employee-tracker-e1f25.firebaseio.com",
    projectId: "employee-tracker-e1f25",
    storageBucket: "employee-tracker-e1f25.appspot.com",
    messagingSenderId: "1090492013925"
  };

  firebase.initializeApp(config);

   var database = firebase.database();

   var name = "";
   var role = "";
   var startDate = "";
   var monthsWorked = "";
   var monthlyRate = "";
   var totalBilled = "";

   

$("button").on("click", function(){
	name = $("#employeeName").val().trim();
	role = $("#role").val().trim();
	startDate = $("#trainTime").val().trim();
	// monthsWorked = $("#trainTime").val().trim()
	// monthlyRate = $("#monthlyRate").val().trim()
	// totalbilled = $("#employeeName").val().trim()

	database.ref().push({
		name: name,
		role: role,
		startDate: startDate
	})

});

database.ref().on("child_added", function(childSnapshot){
	var newRow = $("<tr>");

	var employee = $("<td scope='col'>").html(childSnapshot.val().name);

	console.log(childSnapshot.val().name)

	var title = $("<td scope='col'>").html(childSnapshot.val().role);

	var startDate = $("<td scope='col'>").html(childSnapshot.val().startDate);
	// var monthlyRate = $("<td>").html($("#monthlyRate").val().trim());
	// var totalComp = $("<td>").html($("#totalComp").val().trim());

	newRow.append(employee)
		// .append(title)
		.append(title)
		.append(startDate)
		// .append(totalComp);

	$("#employeeTable").append(newRow);

})


})





