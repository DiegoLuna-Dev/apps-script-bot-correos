function EnviarCorreoBasico () {
  var hoja = 
  SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var datos =
 hoja.getDataRange().getValues();

  var idDelplan =
  DriveApp.getFileById("ID_DE_TU_ARCHIVO")

  for (var i = 1; i < datos.length; i++){

    var correo = datos[i][1]
    MailApp.sendEmail(correo,"plan de evalucion","Hola, adjunto el plan de evalucion.",{
      attachments:[idDelplan.getAs(MimeType.PDF)]
     }); 
  }
}
