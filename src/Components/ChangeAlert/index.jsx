import React from 'react';
import { useWithStorageListener } from './useWithStorageListener';

const ChangeAlert = ({sincronize}) => {

  const { show, toggleShow } = useWithStorageListener(sincronize);

  if (show) {
    return (
      <div>
        <p>Hubo hubo cambios</p>
        <button
          onClick={toggleShow}
        >
          Volver a cargar la información
        </button>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };