let qrCode;

function generateQRCode() {
  const url = document.getElementById("urlInput").value;
  if (!url) return;

  if (qrCode) {
    document.getElementById("qr").innerHTML = "";
  }

  qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    type: "svg",
    data: url,
    image: "A.png", // center logo image (replace with your own A symbol)
    dotsOptions: {
      color: "#000",
      type: "dots"
    },
    cornersSquareOptions: {
      type: "extra-rounded"
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 5
    }
  });

  qrCode.append(document.getElementById("qr"));
}
function downloadQR() {
    if (!qrCode) return;
    qrCode.download({
      name: "qr-code",
      extension: "png"  // you can change to "jpeg" or "svg"
    });
  }
  