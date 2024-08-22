function generateCodes() {
    const qrCodeElement = document.getElementById("qrCode");

    // Clear previous codes
    qrCodeElement.innerHTML = '';

    // Collect the dynamic data
    const data = {
        universityName: "University of Peshawar",
        instituteName: document.getElementById("instituteName").value,
        amount: document.getElementById("amount").value,
        bankName: document.getElementById("bankName").value,
        accountNo: document.getElementById("accountNo").value,
        receiptNo1: document.getElementById("receiptNo1").value,
        receiptNo2: document.getElementById("receiptNo2").value,
        discipline: document.getElementById("discipline").value,
    };

    // Format the data as plain text
    const formattedData = `
        University of Peshawar
        Institute Name: ${data.instituteName}
        Amount: ${data.amount}
        Bank Name: ${data.bankName}
        Account No: ${data.accountNo}
        Receipt No 1: ${data.receiptNo1}
        Receipt No 2: ${data.receiptNo2}
        discipline:${data.discipline}
    `;

    // Generate QR Code
    new QRCode(qrCodeElement, {
        text: formattedData,
        width: 256,  // Increased size for better readability
        height: 256,
        correctLevel: QRCode.CorrectLevel.H // High error correction level
    });
}

function formatDate(dateStr) {
    const [year, month, day] = dateStr.split("-");
    return `${day}/${month}/${year}`;
}
function printCodes() {
    const data = {
        dateOfIssuance: formatDate(document.getElementById("dateOfIssuance").value),
        validity: formatDate(document.getElementById("validity").value),
        currentYear: document.getElementById("currentYear").value,
        instituteName: document.getElementById("instituteName").value,
        amount: document.getElementById("amount").value,
        accountNo: document.getElementById("accountNo").value,
        receiptNo1: document.getElementById("receiptNo1").value,
        receiptNo2: document.getElementById("receiptNo2").value,
        date1: formatDate(document.getElementById("date1").value),
        date2: formatDate(document.getElementById("date2").value),
        discipline: document.getElementById("discipline").value,
        bankName: document.getElementById("bankName").value
    };

    const printContent = `
        <div class="top-right">
            <label>Date of Issuance: <strong>${data.dateOfIssuance}</strong></label><br>
            <label>Valid Up to: <strong>${data.validity}</strong></label>
        </div>
        <div class="center-text">
            <h4>THE REGISTRAR</h4>
            <h4>UNIVERSITY OF PESHAWAR</h4>
            <img src="uoplogo.jpeg" alt="University Logo" class="logo">
            <br><br>
            <h3 class="underline">RENEWAL OF AFFILIATION/N.O.C.</h3>
            <br>
            <label> <strong>For the Year  ${data.currentYear} </strong></label>
            <br><br>
            <p>Certified that the <strong> ${data.instituteName} </strong> has remitted Rs. ${data.amount} in ${data.bankName} Account No. ${data.accountNo} via receipt No. ${data.receiptNo1} and ${data.receiptNo2} dated ${data.date1} and ${data.date2} on account of annual affiliation retaining fee for the discipline of <strong> ${data.discipline}.</strong></p>
            <br><br>
            <p><strong>Note: NOC is not valid for the purpose of Admissions/Examinations.</strong></p>
            <br><br><br><br>
            <p class="right-text"><strong>Assistant Registrar (Affiliation)</strong></p>
            <br><br>
            ${document.getElementById('qrCode').outerHTML}
            <p class="left-text"><strong>Copy for information to:</strong></p>
            <div class="align">
              <p>1. The Controller of Examinations, University of Peshawar.</p>
              <p>2. The Director Admissions, University of Peshawar.</p>
            </div>
            <br><br>
            
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

