// let table = document.createElement("table");

// let linha1 = document.createElement("tr");
// let linha2 = document.createElement("tr");
// let linha3 = document.createElement("tr");
// linha1.id = ('tableLine');
// // linha1.classList.add("tableLine");

// let Column1 = document.createElement("td");
// let Column2 = document.createElement("td");
// let Column3 = document.createElement("td");
// let Column4 = document.createElement("td");
// let Column5 = document.createElement("td");

// Column1.textContent = "Linha 1, Coluna 1|";
// Column2.textContent = "Linha 1, Coluna 2|";
// Column3.textContent = "Linha 2, Coluna 1|";
// Column4.textContent = "Linha 2, Coluna 2|";
// Column5.textContent = "Linha 3, Coluna 1|";

// let cloneColumn1 = Column1.cloneNode(true);
// let cloneColumn2 = Column2.cloneNode(true);
// let cloneColumn3 = Column3.cloneNode(true);
// let cloneColumn4 = Column4.cloneNode(true);
// let cloneColumn5 = Column5.cloneNode(true);
// // let cloneColumn6 = btnEdit.cloneNode(true);



// linha1.appendChild(cloneColumn1);
// linha1.appendChild(cloneColumn2);
// linha1.appendChild(cloneColumn3);
// linha1.appendChild(cloneColumn4);
// linha1.appendChild(cloneColumn5);
// // linha1.appendChild(cloneColumn6);

// table.appendChild(linha1);

// let tableContainer = document.getElementById("table-container");
// tableContainer.appendChild(table);

// =================================================================
// =================================================================
// =================================================================
// let table = document.createElement("table");

// let coluna1 = document.createElement("td");
// let coluna2 = document.createElement("td");
// let btnEdit = document.createElement("button");
// btnEdit.id = "id_btnEdit";

// coluna1.textContent = "Conteúdo da coluna 1";
// coluna2.textContent = "Conteúdo da coluna 2";
// btnEdit.textContent = "Editar";

// for (let i = 0; i < 5; i++) {
//   let linha = document.createElement("tr");
//   let novaColuna1 = coluna1.cloneNode(true);
//   let novaColuna2 = coluna2.cloneNode(true);
//   let novaColuna3 = btnEdit.cloneNode(true);
  
//   linha.appendChild(novaColuna1);
//   linha.appendChild(novaColuna2);
//   linha.appendChild(novaColuna3);
//   table.appendChild(linha);
// }

// let tableContainer = document.getElementById("table-container");
// tableContainer.appendChild(table);

// ===================================================================
// ===================================================================
// ===================================================================

// let table = document.createElement("table");

// let columnID = document.createElement("td");
// let coluna1 = document.createElement("td");
// let coluna2 = document.createElement("td");
// let btnEdit = document.createElement("button");
// let btnDelete = document.createElement("button");

// let lt_data = [];



// coluna1.textContent = "Primeira Coluna";
// coluna2.textContent = "Segunda Coluna";
// btnEdit.textContent = "Editar";
// btnDelete.textContent = "Deletar";

// for (let i = 0; i < 5; i++) {
  
//   columnID.textContent = i;
  
//   let linha = document.createElement("tr");
//   let novacolunaID = columnID.cloneNode(true);
//   let novaColuna1 = coluna1.cloneNode(true);
//   let novaColuna2 = coluna2.cloneNode(true);
//   let novaColuna3 = btnEdit.cloneNode(true);
//   let novaColuna4 = btnDelete.cloneNode(true);
  
  

//   novaColuna3.addEventListener("click", () => {
//     if (novaColuna3.textContent === "Editar") {
//       novaColuna1.innerHTML = '<input type="text" value="' + novaColuna1.textContent + '">';
//       novaColuna2.innerHTML = '<input type="text" value="' + novaColuna2.textContent + '">';
//       novaColuna3.textContent = "Salvar";
//       novaColuna4.textContent = "Cancelar";
//     } else {
      
//       let dadosLinha = {
//         colunaId: novacolunaID.textContent,
//         coluna1: novaColuna1.querySelector("input").value,
//         coluna2: novaColuna2.querySelector("input").value
//       };

//       lt_data[i] = dadosLinha;


//       novaColuna1.textContent = dadosLinha.coluna1;
//       novaColuna2.textContent = dadosLinha.coluna2;
//       novaColuna3.textContent = "Editar";
//       novaColuna4.textContent = "Deletar";
//     }
//   });

//   novaColuna4.addEventListener("click", () => {
//     if (novaColuna4.textContent === "Cancelar") {

//       if ( novaColuna1.querySelector("input").value !== novaColuna1.textContent ){
//       novaColuna1.innerHTML = novaColuna1.querySelector("input").value;
//       novaColuna2.innerHTML = novaColuna2.querySelector("input").value;
//       }
//      else{
//       novaColuna1.innerHTML = coluna1.textContent;
//       novaColuna2.innerHTML = coluna2.textContent;

//      }
      
//       novaColuna3.textContent = "Editar";
//       novaColuna4.textContent = "Deletar";
//     } else {
//       linha.remove();
//     }
//   });
  

//   // linha.appendChild(novacolunaID);
//   linha.appendChild(novaColuna1);
//   linha.appendChild(novaColuna2);
//   linha.appendChild(novaColuna3);
//   linha.appendChild(novaColuna4);
//   table.appendChild(linha);
// }

// let tableContainer = document.getElementById("table-container");
// tableContainer.appendChild(table);

// console.log(lt_data); 


// =========================================================================================
// =========================================================================================
// =========================================================================================


const fs = require('fs'); // Importa o módulo 'fs' para lidar com arquivos
const data = [
  {
    "id": 1,
    "coluna1": "Valor 1",
    "coluna2": "Valor 2"
  },
  {
    "id": 2,
    "coluna1": "Valor 3",
    "coluna2": "Valor 4"
  },
  {
    "id": 3,
    "coluna1": "Valor 5",
    "coluna2": "Valor 6"
  }
];

let table = document.createElement("table");

let columnID = document.createElement("td");
let coluna1 = document.createElement("td");
let coluna2 = document.createElement("td");
let btnEdit = document.createElement("button");
let btnDelete = document.createElement("button");

let lt_data = [];

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    data.forEach((item, i) => {
      // columnID.textContent = i;

      let linha = document.createElement("tr");
      let novacolunaID = columnID.cloneNode(true);
      let novaColuna1 = coluna1.cloneNode(true);
      let novaColuna2 = coluna2.cloneNode(true);
      let novaColuna3 = btnEdit.cloneNode(true);
      let novaColuna4 = btnDelete.cloneNode(true);

      novacolunaID.textContent = item.id;
      novaColuna1.textContent = item.coluna1;
      novaColuna2.textContent = item.coluna2;
      novaColuna3.textContent = "Editar";
      novaColuna4.textContent = "Deletar";

      novaColuna3.addEventListener("click", () => {
        if (novaColuna3.textContent === "Editar") {
          novaColuna1.innerHTML = '<input type="text" value="' + novaColuna1.textContent + '">';
          novaColuna2.innerHTML = '<input type="text" value="' + novaColuna2.textContent + '">';
          novaColuna3.textContent = "Salvar";
          novaColuna4.textContent = "Cancelar";
        } else {
          let dadosLinha = {
            colunaId: novacolunaID.textContent,
            coluna1: novaColuna1.querySelector("input").value,
            coluna2: novaColuna2.querySelector("input").value
          };

          lt_data[i] = dadosLinha;

          novaColuna1.textContent = dadosLinha.coluna1;
          novaColuna2.textContent = dadosLinha.coluna2;
          novaColuna3.textContent = "Editar";
          novaColuna4.textContent = "Deletar";
        }
      });

      novaColuna4.addEventListener("click", () => {
        if (novaColuna4.textContent === "Cancelar") {
          if (novaColuna1.querySelector("input").value !== novaColuna1.textContent) {
            novaColuna1.innerHTML = novaColuna1.querySelector("input").value;
            novaColuna2.innerHTML = novaColuna2.querySelector("input").value;
          } else {
            novaColuna1.innerHTML = item.coluna1;
            novaColuna2.innerHTML = item.coluna2;
          }

          novaColuna3.textContent = "Editar";
          novaColuna4.textContent = "Deletar";
        } else {
          linha.remove();
        }
      });

      linha.appendChild(novacolunaID);
      linha.appendChild(novaColuna1);
      linha.appendChild(novaColuna2);
      linha.appendChild(novaColuna3);
      linha.appendChild(novaColuna4);
      table.appendChild(linha);
    });
  });

let tableContainer = document.getElementById("table-container");
tableContainer.appendChild(table);

console.log(lt_data);














// var tests = [
//     {'name':'Distillation 50%', 'id':'1', 'result':"43"},
//     {'name':'Flash Point', 'id':'2', 'result':"61"},
//     {'name':'Water By Karl Fischer', 'id':'3', 'result':"24"},
// ]


// for (var i in tests){
//     addRow(tests[i])
// }

// function addRow(obj){
//     var row = `<tr scope="row" class="test-row-${obj.id}">
//                    <td>${obj.name}</td>
//                    <td>${obj.result}</td>
//                    <td>
//                            <button class="btn btn-sm btn-danger">Delete</button>
//                            <button class="btn btn-sm btn-info">Save</button>
//                            <!--
//                            <button class="btn btn-sm btn-danger">Cancel</button>
//                            <button class="btn btn-sm btn-primary">Confirm</button>
//                            -->
//                    </td>
//                </tr>`
//     $('#tests-table').append(row)

// }