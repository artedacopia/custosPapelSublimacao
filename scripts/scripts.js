const camisas = {
    "pMasculina": {"mangaNormal": {"largura": 46, "altura": 24},
                   "mangaLonga": {"largura": 48.5, "altura": 62},
                   "frente": {"largura": 55, "altura": 71},
                   "costas": { "largura": 56.5, "altura": 74.5}
    },

    "mMasculina": {"mangaNormal": {"largura": 50, "altura": 26},
                   "mangaLonga": {"largura": 48.5, "altura": 62},
                   "frente": {"largura": 59, "altura": 74.25},
                   "costas": { "largura": 59, "altura": 76}
    },

    "gMasculina": {"mangaNormal": {"largura": 50.5, "altura": 26.3},
                   "mangaLonga": {"largura": 49.5, "altura": 63},
                   "frente": {"largura": 60, "altura": 77},
                   "costas": { "largura": 60, "altura": 79}
    },

    "ggMasculina": {"mangaNormal": {"largura": 50.5, "altura": 26.3},
                   "mangaLonga": {"largura": 51, "altura": 65},
                   "frente": {"largura": 62, "altura": 78},
                   "costas": { "largura": 62, "altura": 81}
    },

    "xgMasculina": {"mangaNormal": {"largura": 57, "altura": 30},
                    "mangaLonga": {"largura": 57.5, "altura": 70},
                    "frente": {"largura": 70, "altura": 86},
                    "costas": { "largura": 70, "altura": 88}
    },

    "pBabylook": {"mangaNormal": {"largura": 40.5, "altura": 19},
                  "mangaLonga": {"largura": 37, "altura": 57.5},
                  "frente": {"largura": 50.5, "altura": 64},
                  "costas": { "largura": 51, "altura": 66.2}
    },

    "mBabylook": {"mangaNormal": {"largura": 44, "altura": 20.5},
                  "mangaLonga": {"largura": 42.5, "altura": 58},
                  "frente": {"largura": 54, "altura": 66},
                  "costas": { "largura": 54.5, "altura": 69}
    },

    "gBabylook": {"mangaNormal": {"largura": 45.6, "altura": 21.3},
                  "mangaLonga": {"largura": null, "altura": null},
                  "frente": {"largura": 57.55, "altura": 66.1},
                  "costas": { "largura": 57.55, "altura": 71.2}
    },

    "ggBabylook": {"mangaNormal": {"largura": 48.1, "altura": 21.4},
                   "mangaLonga": {"largura": null, "altura": null},
                   "frente": {"largura": 59.5, "altura": 68},
                   "costas": { "largura": 59.5, "altura": 71}
    },


    "xgBabylook": {"mangaNormal": {"largura": 51.4, "altura": 23.6},
                   "mangaLonga": {"largura": null, "altura": null},
                   "frente": {"largura": 65.4, "altura": 73.9},
                   "costas": { "largura": 65.4, "altura": 75.8}
    },

    "xggBabylook": {"mangaNormal": {"largura": 57, "altura": 30},
                    "mangaLonga": {"largura": null, "altura": null},
                    "frente": {"largura": 67, "altura": 88},
                    "costas": { "largura": 67, "altura": 88}
    },

    "ppInfantil": {"mangaNormal": {"largura": 17.3, "altura": 32.75},
                   "mangaLonga": {"largura": null, "altura": null},
                   "frente": {"largura": 37.85, "altura": 33},
                   "costas": { "largura": 39.05, "altura": 33}
    },

    "pInfantil": {"mangaNormal": {"largura": 18.5, "altura": 35},
                  "mangaLonga": {"largura": 35, "altura": 50.5},
                  "frente": {"largura": 41.2, "altura": 53.3},
                  "costas": { "largura": 41, "altura": 55}
    },

    "mInfantil": {"mangaNormal": {"largura": 17.8, "altura": 39},
                  "mangaLonga": {"largura": 38, "altura": 52},
                  "frente": {"largura": 45.36, "altura": 60.5},
                  "costas": { "largura": 45, "altura": 61}
    },

    "gInfantil": {"mangaNormal": {"largura": 39.2, "altura": 19},
                  "mangaLonga": {"largura": null, "altura": null},
                  "frente": {"largura": 47, "altura": 64.8},
                  "costas": { "largura": 47.4, "altura": 66.5}
    },

    "ggInfantil": {"mangaNormal": {"largura": 43, "altura": 21.5},
                  "mangaLonga": {"largura": null, "altura": null},
                  "frente": {"largura": 51, "altura": 66},
                  "costas": { "largura": 52, "altura": 69}
    },

};

function getCamisaSize(tamanho) {
    let res = document.querySelector("#resultado");

    res.innerHTML = `<h2>Medidas da camisa tamanho ${tamanho}:</h2>`;

    let camisa = camisas[tamanho];
    for (let parte in camisa) {
        let medidas = camisa[parte];
        res.innerHTML += `<strong>${parte}:</strong> Largura: ${medidas.largura} cm, Altura: ${medidas.altura} cm<br>`;
    }

}

const precoPorM2 = 8.5;
let orcamento = []; // lista de itens
let totalGeral = 0;

function adicionarItem(editIndex = null) {
  const tamanho = document.getElementById('tamanho').value;
  const tipo = document.getElementById('tipo').value;
  const qtd = Number(document.getElementById('quantidade').value);

  const camisa = camisas[tamanho];
  if (!camisa) return alert("Tamanho inválido.");

  const frente = camisa.frente.largura * camisa.frente.altura;
  const costas = camisa.costas.largura * camisa.costas.altura;
  let mangas = 0;

  if (tipo === 'mangaNormal' && camisa.mangaNormal.largura && camisa.mangaNormal.altura) {
    mangas = camisa.mangaNormal.largura * camisa.mangaNormal.altura * 2;
  } else if (tipo === 'mangaLonga' && camisa.mangaLonga.largura && camisa.mangaLonga.altura) {
    mangas = camisa.mangaLonga.largura * camisa.mangaLonga.altura * 2;
  }

  const areaTotal = (frente + costas + mangas) / 10000;
  const custo = areaTotal * precoPorM2 * qtd;

  const item = { tamanho, tipo, qtd, areaTotal, custo };

  if (editIndex !== null) {
    orcamento[editIndex] = item;
  } else {
    orcamento.push(item);
  }

  atualizarTabela();
}

function atualizarTabela() {
  const tbody = document.querySelector("#tabela tbody");
  tbody.innerHTML = "";
  totalGeral = 0;

  orcamento.forEach((item, i) => {
    totalGeral += item.custo;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <i class="fa-solid fa-pen" title="Editar" onclick="editarItem(${i})"></i> &nbsp;
        <i class="fa-solid fa-trash" title="Excluir" onclick="excluirItem(${i})"></i>
      </td>
      <td>${item.tamanho}</td>
      <td>${item.tipo}</td>
      <td>${item.qtd}</td>
      <td>${item.areaTotal.toFixed(2)}</td>
      <td>R$ ${item.custo.toFixed(2)}</td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById("total").textContent = `R$ ${totalGeral.toFixed(2)}`;
}

function editarItem(index) {
  const item = orcamento[index];
  document.getElementById('tamanho').value = item.tamanho;
  document.getElementById('tipo').value = item.tipo;
  document.getElementById('quantidade').value = item.qtd;

  excluirItem(index);
}

function excluirItem(index) {
  orcamento.splice(index, 1);
  atualizarTabela();
}

function excluirTudo() {
  if (confirm("Deseja realmente excluir todos os itens?")) {
    orcamento = [];
    atualizarTabela();
  }
}

function exportarOrcamento() {
  const blob = new Blob([JSON.stringify(orcamento, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "orcamento_camisas.json";
  a.click();
  URL.revokeObjectURL(url);
}

function importarOrcamento(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = e => {
    try {
      orcamento = JSON.parse(e.target.result);
      atualizarTabela();
    } catch (err) {
      alert("Erro ao importar arquivo.");
    }
  };
  reader.readAsText(file);
}