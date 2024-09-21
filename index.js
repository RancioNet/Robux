document.addEventListener("DOMContentLoaded", function() {
    const robuxInput = document.querySelector('#robux-input');
    const outputReceived = document.querySelector('b:nth-of-type(1)');
    const outputRequired = document.querySelector('b:nth-of-type(2)');

    robuxInput.addEventListener('input', function() {
        const robux = parseInt(robuxInput.value);

        if (!isNaN(robux) && robux > 0) {
            const por70 = robux * 0.7;
            const requiredRobux = robux / 0.7;

            // Actualiza los valores
            outputReceived.textContent = `Recibidos al vender: ${Math.floor(robux * 0.7)} (${por70.toFixed(3)})`;
            outputRequired.textContent = `Robux requeridos para recibir: ${Math.ceil(requiredRobux)}`;
        } else {
            outputReceived.textContent = "Recibidos al vender: NaN";
            outputRequired.textContent = "Robux requeridos para recibir: NaN";
        }
    });
});
