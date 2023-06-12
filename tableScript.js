let table = document.createElement("table");

let columnID = document.createElement("td");
let colunaImg = document.createElement("td");
let coluna1 = document.createElement("td");
let coluna2 = document.createElement("td");
// let coluna3 = document.createElement("td");
let btnEdit = document.createElement("button");
let btnDelete = document.createElement("button");




const lt_data  = [
  {
    "id": 1,
    "coluna1": "Valor 1",
    "coluna2": "Valor 2"
  },
  {
    "id": 2,
    "coluna1": "Valor 3",
    "coluna2": "Valor 4"
  },  {
    "id": 2,
    "coluna1": "Valor 3",
    "coluna2": "Valor 4",
    "coluna3": 'images/Estojo-brw.webp'
  },
  {
    "id": 3,
    "coluna1": "Valor 5",
    "coluna2": "Valor 6",
    'coluna3': 'images/caneta_bic-3.webp'
  }
];



// coluna1.textContent = "Primeira Coluna";
// coluna2.textContent = "Segunda Coluna";
btnEdit.textContent = "Editar";
btnDelete.textContent = "Deletar";

for (let i = 0; i < lt_data.length; i++) {

  
  columnID.textContent = i;
  
  let linha = document.createElement("tr");
  
  columnID.textContent  = lt_data[i].id;
  coluna1.textContent  = lt_data[i].coluna1;
  coluna2.textContent  = lt_data[i].coluna2;

  let novacolunaID = columnID.cloneNode(true);
  let novaImage = colunaImg.cloneNode(true);
  let novaColuna1 = coluna1.cloneNode(true);
  let novaColuna2 = coluna2.cloneNode(true);
  
  
  let novaBtnEdit = btnEdit.cloneNode(true);
  let novaBtnDelete = btnDelete.cloneNode(true);
  
  novaImage = document.createElement('img');
  novaImage.src = lt_data[i].coluna3;
  novaImage.classList.add('gt_column_img');

  let valorColuna1Original = novaColuna1.textContent;
  let valorColuna2Original = novaColuna2.textContent;
  
  novaBtnEdit.addEventListener("click", () => {
    if (novaBtnEdit.textContent === "Editar") {
      
      valorColuna1Original = novaColuna1.textContent;
      valorColuna2Original = novaColuna2.textContent;
      
      novaColuna1.innerHTML = '<input type="text" value="' + novaColuna1.textContent + '">';
      novaColuna2.innerHTML = '<input type="text" value="' + novaColuna2.textContent + '">';
      novaBtnEdit.textContent = "Salvar";
      novaBtnDelete.textContent = "Cancelar";
    } else {
      
      let dadosLinha = {
        colunaId: novacolunaID.textContent,
        coluna1: novaColuna1.querySelector("input").value,
        coluna2: novaColuna2.querySelector("input").value
      };

      lt_data[i] = dadosLinha;


      novaColuna1.textContent = dadosLinha.coluna1;
      novaColuna2.textContent = dadosLinha.coluna2;
      novaBtnEdit.textContent = "Editar";
      novaBtnDelete.textContent = "Deletar";
    }
  });

  novaBtnDelete.addEventListener("click", () => {
    if (novaBtnDelete.textContent === "Cancelar") {

      if ( novaColuna1.querySelector("input").value !== novaColuna1.textContent ){
        novaColuna1.textContent = valorColuna1Original;
        novaColuna2.textContent = valorColuna2Original;
      }
     else{
      novaColuna1.innerHTML = coluna1.textContent;
      novaColuna2.innerHTML = coluna2.textContent;

     }
      
     novaBtnEdit.textContent = "Editar";
     novaBtnDelete.textContent = "Deletar";
    } else {
      linha.remove();
    }
  });
  

  linha.appendChild(novacolunaID);
  linha.appendChild(novaImage);
  linha.appendChild(novaColuna1);
  linha.appendChild(novaColuna2);
  linha.appendChild(novaBtnEdit);
  linha.appendChild(novaBtnDelete);
  table.appendChild(linha);
}

let tableContainer = document.getElementById("table-container");
tableContainer.appendChild(table);

console.log(lt_data); 