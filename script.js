function buscar() {
    let cod = document.getElementById("cod").value;
    let placa = document.getElementById("placa");
    let marca = document.getElementById("marca");
    let modelo = document.getElementById("modelo");
    let ano = document.getElementById("ano");
    let url = "./automoveis.json";
  
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        for (var car of data.automoveis) {
          if (cod == car.placa) {
            placa.innerHTML = "Placa: " + car.placa;
            marca.innerHTML = "Marca: " + car.marca;
            modelo.innerHTML = "Modelo: " + car.modelo;
            ano.innerHTML = "Ano: " + car.ano;
            break;
          }
        }
      })
      .catch((error) => {
        console.error("Erro na busca:", error);
      });
  }
  