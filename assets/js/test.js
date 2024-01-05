function centeredText(doc, text, y) {
  var textWidth =
    (doc.getStringUnitWidth(text) * doc.internal.getFontSize()) /
    doc.internal.scaleFactor;
  var textOffset = (doc.internal.pageSize.width - textWidth) / 2;
  doc.text(text, textOffset, y);
}

document
  .getElementById("calculateButton")
  .addEventListener("click", function () {
    var a = parseFloat(document.getElementById("a").value) || 0;
    var b = parseFloat(document.getElementById("b").value) || 0;
    var c = parseFloat(document.getElementById("c").value) || 0;
    var sum = a + b + c;

    document.getElementById("sumResult").textContent = sum;
    document.getElementById("result").classList.remove("hidden");
  });

document
  .getElementById("exportPdfButton")
  .addEventListener("click", function () {
    document.getElementById("exportForm").classList.remove("hidden");
  });

document
  .getElementById("finalExportButton")
  .addEventListener("click", function () {
    const sum = document.getElementById("sumResult").textContent;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const description = document.getElementById("description").value;

    // Utwórz PDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFont("times");
    // Pierwsza strona - Wyśrodkowany tytuł wielkimi literami
    doc.setFontSize(32);
    doc.setFont("times", "bold");
    centeredText(doc, "UNIWERSYTET", 45);
    centeredText(doc, "KOMISJI  EDUKACJI  NARODOWEJ", 60);
    centeredText(doc, "W  KRAKOWIE", 75);
    doc.setFont("times", "normal");
    doc.setFontSize(16);
    centeredText(doc, "Podstawy modelowania i symulacji - Laboratorium", 95);

    // Tutaj wstaw obraz logo (wyśrodkowany)
    var imgData; // Tu powinien być ciąg base64 obrazu logo
    var imgWidth = 80; // Szerokość obrazu w mm
    var imgHeight = 40; // Wysokość obrazu w mm
    var x = doc.internal.pageSize.width / 2 - imgWidth / 2;
    var y = 80; // Wysokość, na której powinno być logo
    // doc.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
    doc.addImage("assets/images/pdf/uken_logo.png", "PNG", 25, 90, 160, 95);

    doc.setFontSize(18);
    doc.setFont("times", "bold");
    centeredText(doc, "Laboratorium 4", 182);
    doc.setFont("times", "normal");
    centeredText(doc, "Oscylator harmoniczny", 195);

    // Informacje o autorze
    const pageInfo = doc.internal.pageSize;
    const pageHeight = pageInfo.height ? pageInfo.height : pageInfo.getHeight();
    doc.setFontSize(12);
    doc.text("Wykonał:", pageInfo.width - 70, pageHeight - 30);
    doc.text(`${firstName} ${lastName}`, pageInfo.width - 70, pageHeight - 20);
    doc.text("Informatyka IV rok", pageInfo.width - 70, pageHeight - 10);
    doc.text("nr. 151932", pageInfo.width - 70, pageHeight);

    // Dodaj drugą stronę
    doc.addPage();

    // Druga strona - Dane
    doc.setFontSize(16);
    centeredText(doc, "Wyniki eksportu:", 20);

    doc.setFontSize(14);
    centeredText(doc, `Suma: ${sum}`, 40);
    centeredText(doc, `Imię: ${firstName}`, 50);
    centeredText(doc, `Nazwisko: ${lastName}`, 60);

    doc.autoTable({
      startY: 70,
      head: [["Kolumna 1", "Kolumna 2", "Kolumna 3"]],
      body: [
        ["Dane 1.1", "Dane 1.2", "Dane 1.3"],
        ["Dane 2.1", "Dane 2.2", "Dane 2.3"],
      ],
    });

    // Dodaj trzecią stronę z opisem
    doc.addPage();

    // Ustawienia czcionki dla opisu
    doc.setFont("times", "normal");
    doc.setFontSize(12);

    // Ustawienie marginesów
    const margins = {
      top: 20,
      bottom: 20,
      left: 20,
      width: 170,
    };

    // Dodaj tekst opisu z zawijaniem do nowej linii
    doc.text(description, margins.left, margins.top, {
      maxWidth: margins.width,
      align: "justify",
    });

    // Zapisz PDF
    doc.save("raport.pdf");
  });
