import { useState } from "react";
import { useForm } from "react-hook-form";
import RemitoBarcodeScanner from "./RemitoBarcodeScanner.jsx";

const RemitoForm = () => {
  const { register, setValue, handleSubmit } = useForm();
  const [scanning, setScanning] = useState(false);
  const [barcodeScanned, setBarcodeScanned] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    // Lógica para manejar el envío del formulario
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RemitoBarcodeScanner setBarcodeScanned={setBarcodeScanned} />
      <div>
        <label>Código de Barras</label>

        <input
          {...register("codigoBarras", { required: true })}
          value={barcodeScanned}
          readOnly
        />
      </div>
      <div>
        <label>Descripción</label>
        <input {...register("descripcion", { required: true })} />
      </div>
      <div>
        <label>Provincia</label>
        <input {...register("provincia", { required: true })} />
      </div>
      <div>
        <label>Usuario</label>
        <input
          {...register("usuario", { required: true })}
          defaultValue="Usuario Logueado"
        />
      </div>
      <button type="submit">Crear Remito</button>
      {/* <p>El valor es{barcodeScanned}</p> */}
      {/* {scanning && (
        <div>
       
        <button type="button" onClick={() => setScanning(!scanning)}>
          
        </button>
      </div> 
      <div>
        <video ref={ref} style={{ width: "100%" }} />
      </div>
      )} 


     
      
      
      */}
    </form>
  );
};

export default RemitoForm;
