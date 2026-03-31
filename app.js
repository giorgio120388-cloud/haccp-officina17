const controlli = [];

function salvaTemperatura() {
    const frigo = document.getElementById("frigo").value;
    const temp = document.getElementById("temp").value;
    const ora = new Date().toLocaleString();

    if (!frigo || !temp) {
        alert("Inserisci tutti i dati");
        return;
    }

    const controllo = {
        frigo: frigo,
        temperatura: temp,
        data: ora
    };

    controlli.push(controllo);

    aggiornaLista();
}

function aggiornaLista() {
    const output = document.getElementById("output");
    output.innerHTML = "";

    controlli.forEach(c => {
        output.innerHTML += `<li>${c.frigo} - ${c.temperatura}°C (${c.data})</li>`;
    });
}
