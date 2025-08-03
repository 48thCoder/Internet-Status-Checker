window.addEventListener("load", () => {
    checkInternetConnection();
    setInterval(checkInternetConnection, 5000);
});

function checkInternetConnection() {
    const StatusInfo = document.getElementById("StatusInfo");
    const IPInfo = document.getElementById("IPInfo");
    const NetworkInfo = document.getElementById("NetworkInfo");

    StatusInfo.textContent = "Checking...";

    if (navigator.onLine) {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then((data) => {
                StatusInfo.textContent = "Connected";
                StatusInfo.className = "connected";
                IPInfo.textContent = data.ip;

                const connection = navigator.connection;
                const networkStrength = connection ? connection.downlink + 'Mbps' : 'Unknown';
                NetworkInfo.textContent = networkStrength;
            })

            .catch(() => {
                StatusInfo.textContent = "Disconnected";
                StatusInfo.className = "disconnected";
                IPInfo.textContent = "-";
                NetworkInfo.textContent = "-";
            })
    }

    else {
        StatusInfo.textContent = "Disconnected";
        StatusInfo.className = "disconnected";
        IPInfo.textContent = "-";
        NetworkInfo.textContent = "-";
    }
}