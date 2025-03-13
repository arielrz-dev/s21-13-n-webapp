const VisitaLocal = () => {
    return (
      <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg space-y-8 md:space-y-0 md:space-x-10">

        <div className="md:w-3/5 my-8 border-8 border-pink-600 rounded-lg overflow-hidden">
          <img
            src="images/Local.png"
            alt="Local de La Tablada"
            className="w-full h-full object-cover"
            />
        </div>  
        {/* Sección de Información */}
        <div className="md:w-3/5 flex flex-col items-center text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-pink-600 mb-6 text-center">
            ¡Visita nuestro local en La Tablada!
          </h2>
          
          <div className="border-2 border-pink-600 p-2 rounded-2xl mb-6 w-[60%] text-center">
            <h3 className="text-xl font-bold text-pink-600 mb-1">
              Horario de atención
            </h3>
            <p className="text-stone-800 text-lg">Lunes a Domingo</p>
            <p className="text-stone-800 text-lg">12:00 pm – 10:00 pm</p>
          </div>
  
          <div className="flex items-center gap-2 mb-6">
            <img className="w-[25px] h-[25px]" src="images/ubicacion.png"/>
            <p className="text-stone-800 text-lg">Gascon 710, B1766 - La Tablada</p>
          </div>
  
          <div className="w-full h-[250px] md:h-[300px] rounded-lg overflow-hidden border-2 border-pink-600">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.0458368534087!2d-58.53452240000001!3d-34.6787926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc89454d7ba2b%3A0xc206ffdc598ed022!2sGasc%C3%B3n%20710%2C%20B1766AIN%20La%20Tablada%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses-419!2spe!4v1741808872524!5m2!1ses-419!2spe"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    );
  };
  
  export default VisitaLocal;
  