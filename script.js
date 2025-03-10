function calculateAge() {
  const birthdate = document.getElementById("birthdate").value;
  const today = new Date();
  const birthDate = new Date(birthdate);
  
  if (!birthdate) {
    document.getElementById("result").innerHTML = "Please select a valid birthdate.";
    return;
  }

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  document.getElementById("result").innerHTML = You are ${age} years old.;
}