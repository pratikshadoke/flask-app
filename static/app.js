async function fetchData() {
    const res = await fetch("/api/system");
    const data = await res.json();

    document.getElementById("cpu").innerText = data.cpu + "%";
    document.getElementById("memory").innerText = data.memory + "%";
    document.getElementById("disk").innerText = data.disk + "%";
}

setInterval(fetchData, 2000);
fetchData();