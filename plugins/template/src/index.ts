import { logger } from "@vendetta";
import Settings from "./Settings";

export default {
    onLoad: () => {
        logger.log("Плагин активирован!");
        // Добавьте слушателя события "message" для обработки входящих сообщений.
        vendetta.ui.on("message", handleMessage);
    },
    onUnload: () => {
        logger.log("Плагин деактивирован.");
        // Удаляем слушателя события "message" при выгрузке плагина, чтобы избежать утечек памяти.
        vendetta.ui.off("message", handleMessage);
    },
    settings: Settings,
}

// Функция для обработки входящих сообщений
function handleMessage(message: string) {
    // Проверяем, содержит ли сообщение слово "ок" (без учета регистра).
    if (message.toLowerCase().includes("ок")) {
        // Заменяем "ок" на "Окей".
        const correctedMessage = message.replace(/ок/gi, "Окей");
        // Отправляем исправленное сообщение.
        vendetta.ui.sendMessage(correctedMessage);
    }
}
