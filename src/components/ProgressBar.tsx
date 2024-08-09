import React from 'react';

interface ProgressBarProps {
  progreso: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progreso }) => {
  return (
    <div className="w-full">
      {/* Barra de progreso */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
        <div
          className="bg-green-500 h-2.5 rounded-full"
          style={{ width: `${progreso}%` }}
        ></div>
      </div>

      {/* Porcentaje de progreso */}
      <p className="text-center text-gray-600 font-semibold">
        {progreso}% completado
      </p>
    </div>
  );
};

export default ProgressBar;
