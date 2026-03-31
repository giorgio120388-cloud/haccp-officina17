let controlli = JSON.parse(localStorage.getItem("controlli")) || [];

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

    localStorage.setItem("controlli", JSON.stringify(controlli));

    aggiornaLista();
}

function aggiornaLista() {
    const output = document.getElementById("output");
    output.innerHTML = "";

    controlli.forEach(c => {
        output.innerHTML += `<li>${c.frigo} - ${c.temperatura}°C (${c.data})</li>`;
    });
}

// carica dati salvati
window.onload = function() {
    aggiornaLista();
}
