# Bot de Automatización de Correos - Liceo 🚀

Este proyecto es un script desarrollado en *Google Apps Script* diseñado para automatizar el envío de planes de evaluación a estudiantes a través de Gmail, utilizando datos gestionados en Google Sheets.

## 🛠️ Tecnologías utilizadas
* *Google Apps Script*: Motor principal del bot.
* *Google Sheets API*: Para la lectura de la base de datos de estudiantes.
* *Google Drive API*: Para la gestión y adjunto de archivos PDF.
* *Gmail API*: Para el envío automatizado de correos electrónicos.

## 📋 Funcionalidades
* Lectura automática de correos desde una hoja de cálculo.
* Adjunto dinámico de archivos PDF desde Google Drive.
* Registro de estado: marca automáticamente como "Enviado" en la columna D tras procesar cada fila.

## 🚀 Cómo usar
1. Copia el código en tu editor de Google Apps Script.
2. Sustituye ID_DE_TU_ARCHIVO por el ID real de tu PDF en Drive.
3. Asegúrate de que los correos estén en la Columna B de tu hoja.
4. Ejecuta la función EnviarCorreoBasico.

## ⚖️ Licencia
Este proyecto está bajo la Licencia MIT.
