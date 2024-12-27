import { useState, useCallback } from "react";
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
    <div className="flex flex-col items-center">
      <video
        className="aspect-square mb-4 border border-gray-300 rounded"
        ref={ref}
        style={{ height: "200px" }}
      />
      <button
        type="button"
        onClick={getBarcode}
        className="bg-blue-500 text-white p-2 rounded w-full max-w-xs"
      >
        Escanear
      </button>
    </div>
  );
};

export default RemitoBarcodeScanner;
