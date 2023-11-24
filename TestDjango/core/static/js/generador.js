var diasContainer = document.getElementById("dias-container");
var addButton = document.querySelector(".btn-add");

addButton.addEventListener("click", function() {
    var dayIndex = diasContainer.children.length / 2 + 1;
    if (dayIndex < 8) {
        var dayElement = document.createElement("div");
        dayElement.classList.add("form-group");
        dayElement.innerHTML = `
            <label for="dia-${dayIndex}">${obtenerDiaSemana(dayIndex)}:</label>
            <input type="text" class="form-control" id="dia-${dayIndex}" name="dia-${dayIndex}" placeholder="Escribe el plato">
            <button type="button" class="btn btn-danger btn-remove">Quitar</button>`;
        diasContainer.appendChild(dayElement);
    }
});

diasContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("btn-remove")) {
        var dayElement = event.target.parentNode;
        diasContainer.removeChild(dayElement);
    }
});

document.getElementById("menu-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var menuContainer = document.getElementById("menu");
    menuContainer.innerHTML = "";

    var dayInputs = document.querySelectorAll("#dias-container .form-group");
    dayInputs.forEach(function(dayInput) {
        var plato = dayInput.querySelector("input").value;
        if (plato !== "") {
            var dia = dayInput.querySelector("label").textContent.replace(":", "");
            var menuElemento = document.createElement("div");
            menuElemento.classList.add("card", "menu-item");
            menuElemento.innerHTML = `
                <div class="card-body">
                    <h3 class="card-title">${dia}:</h3>
                    <p class="card-text">${plato}</p>
                </div>`;
            menuContainer.appendChild(menuElemento);
        }
    });
});

function obtenerDiaSemana(index) {
    var diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    return diasSemana[index - 1];
}


