function validationForm() {           // MEU CÓDIGO
    let validationTutorPet = document.forms["register"]["tutor"].value;
    let validationNamePet = document.forms["register"]["pet"].value;
    let validationTypePet = document.forms["register"]["type"].value;
    let validationschedulePet = document.forms["register"]["schedule"].value;
    let validationCpf = document.forms["register"]["cpf"].value;
    let validationAgenda = document.forms["register"]["agenda"].value;
    let validationAddressPet = document.forms["register"]["address"].value;
    let validationCellPet = document.forms["register"]["cell"].value;
    let validationEmailPet = document.forms["register"]["email"].value;
    let validationBirthTutorPet = document.forms["register"]["birthTutor"].value;
    
    if(validationTutorPet =="") {
        alert("O Nome do tutor deve ser preenchido");
        return false;
    }
    if(validationNamePet =="") {
        alert("O Nome do Pet deve ser preenchido");
        return false;
    }
    if(validationTypePet == "") {
        alert("O tipo de Pet deve ser preenchido");
        return false;
    }
    if(validationschedulePet  == "") {
        alert("A data deve ser preenchida");
        return false;
    }
    if(validationCpf == "") {
        alert("O CPF deve ser preenchido");
        return false;
        }
    if(validationAgenda == "") {
        alert("O dia deve ser preenchido");
        return false;
            }    
    if(validationAddressPet == "") {
        alert("O Endereço deve ser preenchido");
        return false;
        }
    if(validationCellPet == "") {
        alert("O número celular devem ser preenchidos");
        return false;
        }
    if(validationEmailPet == "") {
        alert("O email deve ser preenchido");
        return false;
    }
    if(validationBirthTutorPet == "") {
        alert("Adata de deve ser preenchido");
        return false;
    }
    alert("A validação ocorreu de forma correta")

}
function insert() {
    let tutor = document.forms["register"]["tutor"].value;
    let pet = document.forms["register"]["pet"].value;
    let typepet = document.forms["register"]["type"].value;
    let schedule = document.forms["register"]["schedule"].value;
    let cpf = document.forms["register"]["cpf"].value;
    let agenda = document.forms["register"]["agenda"].value;
    let address = document.forms["register"]["address"].value;
    let cell = document.forms["register"]["cell"].value;
    let email = document.forms["register"]["email"].value;
    let birthTutor = document.forms["register"]["birthTutor"].value;
   
  
    let insert = window.document.getElementById("insertRow");
  
    insert.innerHTML = `
    <th scope="row">${tutor}</th>
    <td>${pet}</td>
    <td>${typepet}</td>
    <td>${schedule}</td>
    <td>${cpf}</td>
    <td>${agenda}</td>
    <td>${address}</td>
    <td>${cell}</td>
    <td>${email}</td>
    <td>${birthTutor}</td>
    `;
  }