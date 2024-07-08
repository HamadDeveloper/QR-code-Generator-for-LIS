// script.js
function generateCodes() {
    const qrCodeElement = document.getElementById("qrCode");
    const barcodeElement = document.getElementById("barcode");

    // Clear previous codes
    qrCodeElement.innerHTML = '';
    barcodeElement.innerHTML = '';

    // Collect the dynamic data
    const data = {
        dateOfIssuance: document.getElementById("dateOfIssuance").value,
        validity: document.getElementById("validity").value,
        currentYear: document.getElementById("currentYear").value,
        instituteName: document.getElementById("instituteName").value,
        amount: document.getElementById("amount").value,
        accountNo: document.getElementById("accountNo").value,
        receiptNo1: document.getElementById("receiptNo1").value,
        receiptNo2: document.getElementById("receiptNo2").value,
        date1: document.getElementById("date1").value,
        date2: document.getElementById("date2").value,
        discipline: document.getElementById("discipline").value,
        bankName: document.getElementById("bankName").value
    };

    const jsonString = JSON.stringify(data);

    // Generate QR Code
    new QRCode(qrCodeElement, {
        text: jsonString,
        width: 128,
        height: 128
    });

    // Generate Barcode
    JsBarcode(barcodeElement, jsonString, {
        format: "CODE128",
        displayValue: false,
        width: 2,
        height: 40
    });
}

function printCodes() {
    const qrCodeElement = document.getElementById("qrCode");
    const barcodeElement = document.getElementById("barcode");

    const printWindow = window.open('', '', 'height=400,width=600');
    printWindow.document.write('<html><head><title>Print Codes</title></head><body>');
    printWindow.document.write(qrCodeElement.outerHTML);
    printWindow.document.write(barcodeElement.outerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}
