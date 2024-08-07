import React from "react";
import { Cursos } from "../../../interfaces/cursos";
import { useNavigate } from "react-router-dom";

const CourseCard: React.FC<Cursos> = ({
  descripcion,
  id,
  precio,
  titulo,
  imageUrl,
}) => {
  const navigator = useNavigate();
  const goTo = () => {
    navigator(`/cursos/${id}`);
  };
  return (
    <div
      key={id}
      className="max-w-sm bg-white px-6 pt-6 pb-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
    >
      <h3 className="mb-3 text-xl font-bold text-slate-700">{titulo}</h3>
      <div className="relative">
        <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
          Precio: ${precio}
        </p>
      </div>
      <img
        className="mt-4 h-48 w-full object-cover object-center"
        src={imageUrl || ""}
        alt={titulo}
      />
      <div className="my-4">
        <p>{descripcion}</p>
      </div>
      <div className="flex justify-center">
        <button
          onClick={goTo}
          className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white text-center mt-6"
          style={{ marginTop: "25px" }}
        >
          Ver Curso
          <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
