import React from "react";

const ServicesComponent = () => {
  return (
    <div className="flex flex-wrap justify-center items-center py-8" id="servicesComponent">
      <div className="w-full">
        <h2 className="text-white text-2xl font-bold text-center mb-8">
          Nuestros Servicios
        </h2>
      </div>
      <div
        className="w-full md:w-1/2 lg:w-1/3 p-4"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <div className="bg-gradient-to-r from-green-500 to-yellow-500 shadow-md p-4 rounded-md">
          <h3 className="text-xl font-bold mb-2">Optimización de rutas y logística dinamica </h3>
          <p className="text-black ">
          Desarrollo de sistemas de optimización de rutas basados en algoritmos avanzados y análisis de datos para minimizar los tiempos de entrega, reducir costos y disminuir la huella de carbono.
          </p>
        </div>
      </div>
      <div
        className="w-full md:w-1/2 lg:w-1/3 p-4"
        data-aos="fade-right"
        data-aos-delay="400"
      >
        <div className="bg-gradient-to-r from-green-500 to-yellow-500 shadow-md p-4 rounded-md">
          <h3 className="text-xl font-bold mb-2">Tecnología de seguimiento y trazabilidad</h3>
          <p className="text-black">
          Implementación de sistemas de seguimiento y trazabilidad utilizando sensores, etiquetas RFID o códigos QR para rastrear la ubicación y el estado de los productos en tiempo real a lo largo de toda la cadena de suministro.
          </p>
        </div>
      </div>
      <div
        className="w-full md:w-1/2 lg:w-1/3 p-4"
        data-aos="fade-right"
        data-aos-delay="600"
      >
        <div className="bg-gradient-to-r from-green-500 to-yellow-500 shadow-md p-4 rounded-md">
          <h3 className="text-xl font-bold mb-2">Plataforma de colaboración y gestión de pedidos</h3>
          <p className="text-black">
          Lulai.co conecta a productores, distribuidores y minoristas, simplificando la comunicación y la gestión de pedidos, permitiendo realizar pedidos en línea y automatizando la facturación.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;


