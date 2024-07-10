function generateCodes() {
    const qrCodeElement = document.getElementById("qrCode");

    // Clear previous codes
    qrCodeElement.innerHTML = '';

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
}

function printCodes() {
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

    const printContent = `
        <div class="top-right">
            <label>Date of Issuance: ${data.dateOfIssuance}</label><br>
            <label>Valid Up to: ${data.validity}</label>
        </div>
        <div class="center-text">
            <h2>THE REGISTRAR</h2>
            <h2>UNIVERSITY OF PESHAWAR</h2>
            <img src="uoplogo.jpeg" alt="University Logo" class="logo">
            <br><br>
            <h2 class="underline">RENEWAL OF AFFILIATION/N.O.C.</h2>
            <br>
            <label> <strong>For the Year  ${data.currentYear} </strong></label>
            <br><br>
            <p>Certified that the <strong> ${data.instituteName} </strong> has remitted Rs. ${data.amount} in ${data.bankName} Account No. ${data.accountNo} via receipt No. ${data.receiptNo1} and ${data.receiptNo2} dated ${data.date1} and ${data.date2} on account of annual affiliation retaining fee for the discipline of <strong> ${data.discipline}.</strong></p>
            <br><br>
            <p><strong>Note: NOC is not valid for the purpose of Admissions/Examinations.</strong></p>
            <br><br><br><br>
            <p class="right-text"><strong>Assistant Registrar (Affiliation)</strong></p>
            <br><br>
            <p class="left-text"><strong>Copy for information to:</strong></p>
            <div class="align">
              <p>1. The Controller of Examinations, University of Peshawar.</p>
              <p>2. The Director Admissions, University of Peshawar.</p>
            </div>
            <br><br>
            ${document.getElementById('qrCode').outerHTML}
        </div>`;

    const printWindow = window.open('', '', 'height=400,width=600');
    printWindow.document.write('<html><head><title>Print Codes</title>');
    printWindow.document.write('<link rel="stylesheet" href="styles.css">'); // Include your styles in the print window
    printWindow.document.write('</head><body>');
    printWindow.document.write(printContent);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}
