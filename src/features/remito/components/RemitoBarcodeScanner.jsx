import { useState, useCallback, useEffect } from "react";
import { useZxing } from "react-zxing";

const RemitoBarcodeScanner = ({ setBarcodeScanned }) => {
  const [barcode, setBarcode] = useState("");
  const { ref, torch } = useZxing({
    onDecodeResult(result) {
      setBarcode(result.getText());
      torch.off();
      if (setBarcodeScanned) {
        setBarcodeScanned(result.getText());
      }
    },
  });

  const getBarcode = useCallback(() => {
    setBarcode("");
    torch.on();
    setBarcodeScanned("");
    setBarcodeScanned(barcode);
    torch.off();
  }, [torch, barcode, setBarcodeScanned]);

  return (
    <>
      <video className="aspect-square" ref={ref} style={{ height: "10%" }} />
      <button type="button" onClick={getBarcode}>
        Escanear
      </button>
    </>
  );
};

export default RemitoBarcodeScanner;
