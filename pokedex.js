const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            /*console.log(res);*/
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            //IMAGEN POKEMON
            //console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            //console.log(pokeImg);

            //NOMBRE DEL POKEMON
            let nombre = data.species.name;
            console.log(nombre);
            agregarNombre(nombre);

            //TIPO DE POKEMON
            let tipo = data.types[0].type.name;
            console.log(tipo);
            agregarTipo(tipo);

            //ESTADISTICA DEL POKEMON
            let estadisticas = data.stats;
            //console.log(estadisticas);
            let estadistica = [];
            for(let i=0; i<estadisticas.length; i++){
                estadistica.push(estadisticas[i].stat.name);
            }
            //console.log(estadistica);
            let estadisticaUnida = estadistica.join();
            //console.log(estadisticaUnida);
            agregarEstadistica(estadisticaUnida);

            //MOVIMIENTOS
            let movimientos = data.moves;
            //console.log(movimientos);
            let movimiento = [];
            for(let i=0; i < movimientos.length; i++){
                movimiento.push(movimientos[i].move.name);
            }
            //console.log(movimiento);
            let movimientoUnido = movimiento.join();
            //console.log(movimientoUnido);
            agregarMovimientos(movimientoUnido);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
    document.getElementById("pokeName").value = "";
}

const agregarNombre = (nombre) => {
    const idNombre = document.getElementById("nombre");
    idNombre.innerHTML = "Nombre: " + nombre;
}

const agregarTipo = (tipo) =>{
    const idTipo = document.getElementById("tipo");
    idTipo.innerHTML = "Tipo: " + tipo;
}

const agregarEstadistica = (estadistica) =>{
    const idEstadistica = document.getElementById("estadistica");
    idEstadistica.innerHTML = "Estadistica: " + estadistica;
}

const agregarMovimientos = (movimiento) =>{
    const idMovimiento = document.getElementById("movimiento");
    idMovimiento.innerHTML = "Movimientos: " + movimiento;
}