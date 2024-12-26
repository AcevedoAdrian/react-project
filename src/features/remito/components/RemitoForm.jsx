import { useState } from "react";
import { useForm } from "react-hook-form";
import { useZxing } from "react-zxing";

const RemitoForm = () => {
  const { register, setValue, handleSubmit } = useForm();
  const [scanning, setScanning] = useState(false);
  const [barcode, setBarcode] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    // Lógica para manejar el envío del formulario
  };

  const { ref } = useZxing({
    onResult(result) {
      const code = result.getText();
      setBarcode(code);
      setValue("codigoBarras", code, { shouldValidate: true });
      setScanning(false);
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Código de Barras</label>
        <input
          {...register("codigoBarras", { required: true })}
          value={barcode}
          readOnly
        />
        <button type="button" onClick={() => setScanning(!scanning)}>
          {scanning ? "Detener Escaneo" : "Escanear Código"}
        </button>
      </div>
      {scanning && (
        <div>
          <video ref={ref} style={{ width: "100%" }} />
        </div>
      )}
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
          defaultValue="UsuarioActual"
        />
      </div>
      <button type="submit">Crear Remito</button>
    </form>
  );
};

export default RemitoForm;
