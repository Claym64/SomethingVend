import { logger, sendMessage } from "@vendetta";
import Settings from "./Settings";

export default {
    onLoad: () => {
        logger.log("Plugin loaded.");
    },
    onUnload: () => {
        logger.log("Plugin unloaded.");
    },
    settings: Settings,
    events: {
        onMessage: (message) => {
            const content = message.content;
            const replacedContent = content.replace(/\bок\b/gi, "Окей");
            
            if (replacedContent !== content) {
                // Заменить только если слово "ок" найдено и заменено
                sendMessage(message.channelId, replacedContent);
            }
        },
    },
}
