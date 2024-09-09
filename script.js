const obtenerValorInput = () => {
  let inputTexto = document.getElementById('input_nombre');
  let valor = inputTexto.value;
  peticionAPI(valor);
};

const peticionAPI = (nombre) => {
  const baseUrl = 'https://api.fbi.gov/wanted/v1/list?title=';
  const endpoint = `${nombre}`;
  const url = `${baseUrl}${endpoint}`;

  axios
    .get(url)
    .then((res) => print(res.data))
    .catch((err) => console.log(err));
};

const print = (data) => {
  let respuesta = document.getElementById('foto');
  respuesta.innerHTML = `
    <img src="${data.items[0]['images'][0]['original']}" alt="Imagen de la persona buscada" />
    `;

  let respuesta1 = document.getElementById('nombre');
  respuesta1.innerHTML = `
    <h1>${data.items[0]['title']}</h1>
    `;

  let respuesta2 = document.getElementById('datos');
  respuesta2.innerHTML = `
    <table>
      <tr>
        <td>Publicación:</td>
        <td>${data.items[0]['publication']}</td>
      </tr>
      <tr>
        <td>Modificado:</td>
        <td>${data.items[0]['modified']}</td>
      </tr>
      <tr>
        <td>Sexo:</td>
        <td>${data.items[0]['sex']}</td>
      </tr>
      <tr>
        <td>Raza:</td>
        <td>${data.items[0]['race']}</td>
      </tr>
      <tr>
        <td>Rango edad:</td>
        <td>${data.items[0]['age_range']}</td>
      </tr>
      <tr>
        <td>Comentarios:</td>
        <td>${data.items[0]['remarks']}</td>
      </tr>
      <tr>
        <td>Detalles:</td>
        <td>${data.items[0]['details']}</td>
      </tr>
    </table>
    

    
    `;

  let respuesta3 = document.getElementById('descripcion');
  respuesta3.innerHTML = `
    <p>${data.items[0]['description']}</p>
    `;
};

const URL = 'https://api.fbi.gov/wanted/v1/list';
fetch(URL)
  .then((response) => response.json())
  .then((datos) => console.log(datos));
