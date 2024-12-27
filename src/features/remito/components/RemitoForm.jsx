import React from "react";
import { useForm } from "react-hook-form";
import RemitoBarcodeScanner from "./RemitoBarcodeScanner";

const RemitoForm = () => {
  const { register, handleSubmit } = useForm();
  const [barcodeScanned, setBarcodeScanned] = React.useState("");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <RemitoBarcodeScanner setBarcodeScanned={setBarcodeScanned} />
        <div className="mb-4">
          <label className="block text-gray-700">Código de Barras</label>
          <input
            {...register("codigoBarras", { required: true })}
            value={barcodeScanned}
            readOnly
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Descripción</label>
          <input
            {...register("descripcion", { required: true })}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Provincia</label>
          <input
            {...register("provincia", { required: true })}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Usuario</label>
          <input
            {...register("usuario", { required: true })}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default RemitoForm;
