import { Forms } from "@vendetta/ui/components";
import { useState, useEffect } from "react";

const { FormText, FormInput } = Forms;

export default () => {
    // Состояния для хранения значений полей ввода.
    const [replaceWord, setReplaceWord] = useState("");
    const [replacementWord, setReplacementWord] = useState("");

    // Функция для обработки изменений в полях ввода и сохранения значений в состоянии.
    const handleReplaceWordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setReplaceWord(event.target.value);
    };

    const handleReplacementWordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setReplacementWord(event.target.value);
    };

    // Эффект для загрузки текущих настроек и отображения их в полях ввода.
    useEffect(() => {
        // Здесь вы можете добавить код для загрузки текущих настроек плагина, если они доступны.

        // Пример загрузки настроек:
        // const savedSettings = loadSettings(); // Загрузка настроек из хранилища.
        // setReplaceWord(savedSettings.replaceWord);
        // setReplacementWord(savedSettings.replacementWord);
    }, []);

    // Функция для сохранения настроек при изменении полей ввода.
    const saveSettings = () => {
        // Здесь вы можете добавить код для сохранения настроек плагина.

        // Пример сохранения настроек:
        // const settingsToSave = { replaceWord, replacementWord };
        // saveSettings(settingsToSave); // Сохранение настроек в хранилище.
    };

    return (
        <div>
            <FormText>Настройки плагина:</FormText>
            <div>
                <FormText>Слово для замены:</FormText>
                <FormInput
                    type="text"
                    value={replaceWord}
                    onChange={handleReplaceWordChange}
                    onBlur={saveSettings}
                />
            </div>
            <div>
                <FormText>Слово, на которое заменить:</FormText>
                <FormInput
                    type="text"
                    value={replacementWord}
                    onChange={handleReplacementWordChange}
                    onBlur={saveSettings}
                />
            </div>
        </div>
    );
}
