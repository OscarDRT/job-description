chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "getDescription") {
    // Aquí es donde llamarías a la API de OpenAI para obtener una descripción
    // Esto es solo un ejemplo, así que simplemente vamos a enviar una respuesta estática
    sendResponse({ description: "Descripción generada" });
  }
});
