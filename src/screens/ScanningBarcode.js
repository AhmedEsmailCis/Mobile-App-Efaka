import ScanBarcode from "react-native-scan-barcode";
import React from "react";

export function ScanningBarcode({ navigation }) {
  function barcodeReceived(e) {
    console.log(`Barcode: ${e.data}`);
    console.log(`Type: ${e.type}`);
    navigation.pop();
  }
  return (
    <ScanBarcode
      onBarCodeRead={barcodeReceived}
      style={{ flex: 1 }}
      torchMode="off"
      cameraType="back"
    />
  );
}
