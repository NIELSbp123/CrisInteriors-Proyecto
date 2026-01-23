/* AA3 - LÓGICA DE NEGOCIO REAL (COTIZADOR CRIS INTERIORS) 
   Actualizado: Precios fijos por espacio + Visita Técnica
*/

// --- FUNCIONALIDAD 1: COTIZADOR CON PRECIOS REALES ---

function calcularPresupuesto() {
    // 1. Obtener datos
    let tipoAmbiente = document.getElementById('tipoAmbiente').value;
    let metrosInput = document.getElementById('metros').value;
    let metros = parseFloat(metrosInput); // Usamos decimales por si ponen 8.5
    let resultadoDiv = document.getElementById('resultadoPresupuesto');

    // Validación
    if (isNaN(metros) || metros <= 0) {
        resultadoDiv.innerHTML = "<p style='color:red; font-weight:bold;'>⚠️ Por favor, ingresa los metros cuadrados del espacio.</p>";
        return;
    }

    // 2. Lógica de Precios (Soles)
    let costoDiseno = 0;
    let costoVisita = 180; // Costo fijo visita técnica
    let mensajeExtra = "";

    // COCINA: 450 hasta 9m2, 500 si es más
    if (tipoAmbiente === 'cocina') {
        if (metros <= 9) {
            costoDiseno = 450;
        } else {
            costoDiseno = 500;
            mensajeExtra = "(Precio ajustado por metraje mayor a 9m²)";
        }
    } 
    // SALA / COMEDOR: 450 hasta 9m2
    else if (tipoAmbiente === 'sala') {
        if (metros <= 9) {
            costoDiseno = 450;
        } else {
            // Asumimos un ligero incremento si es muy grande, o mantenemos base
            costoDiseno = 550; 
            mensajeExtra = "(Precio para espacios amplios mayores a 9m²)";
        }
    } 
    // DORMITORIO: 320 fijo
    else if (tipoAmbiente === 'dormitorio') {
        costoDiseno = 320;
    } 
    // BAÑO: 180 fijo
    else if (tipoAmbiente === 'banio') {
        costoDiseno = 180;
    }

    // 3. Cálculo Total
    let totalEstimado = costoDiseno + costoVisita;

    // 4. Mostrar Resultado (HTML Dinámico)
    resultadoDiv.innerHTML = `
        <div style="background-color: #fdfcf8; border: 1px solid #e0e0e0; padding: 20px; border-radius: 8px; text-align: left;">
            <h4 style="margin-top: 0; color: #8e8071; text-transform: uppercase; letter-spacing: 1px;">Estimado de Inversión</h4>
            
            <p><strong>Espacio:</strong> ${tipoAmbiente.charAt(0).toUpperCase() + tipoAmbiente.slice(1)} (${metros}m²)</p>
            
            <ul style="list-style: none; padding: 0; color: #555; font-size: 0.9rem;">
                <li style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                    <span>📐 Diseño del Espacio:</span> <strong>S/ ${costoDiseno}</strong>
                </li>
                <li style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                    <span>👷 Visita Técnica:</span> <strong>S/ ${costoVisita}</strong>
                </li>
                <li style="border-top: 1px solid #ccc; margin-top: 10px; padding-top: 10px; display: flex; justify-content: space-between; font-size: 1.1rem; color: #2c2c2c;">
                    <span><strong>TOTAL APROX:</strong></span> <strong>S/ ${totalEstimado}</strong>
                </li>
            </ul>
            
            <p style="font-size: 0.8rem; color: #888;">${mensajeExtra}</p>

            <div style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; font-size: 0.85rem; margin-top: 15px;">
                <strong>✅ Incluye:</strong> Vistas 3D, 2-3 Reuniones, Vista en planta (medidas generales), Presupuesto.<br>
                <strong>❌ No incluye:</strong> Planos de muebles a detalle, Ejecución de obra.
            </div>
        </div>
    `;
}

// --- FUNCIONALIDAD 2: LISTA DE BENEFICIOS (Se mantiene igual) ---
const beneficios = [
    "✨ Visualización 3D Fotorrealista",
    "✨ Asesoría en Compra de Materiales",
    "✨ Gestión Integral de Obra",
    "✨ Optimización de Espacios Pequeños"
];

function cargarBeneficios() {
    let listaHTML = document.getElementById('listaBeneficios');
    if (!listaHTML) return;
    listaHTML.innerHTML = "";
    for (let i = 0; i < beneficios.length; i++) {
        let item = document.createElement('li');
        item.textContent = beneficios[i];
        listaHTML.appendChild(item);
    }
}

window.onload = cargarBeneficios;