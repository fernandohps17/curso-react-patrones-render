import React, { useState } from 'react';

function useWithStorageListener({sincronize}) {

    const [storageChange, setStorageChange] = useState(false);

    window.addEventListener('storage', (change) => {
      if (change.key === 'TODOS_V1') {
        console.log('Hubo cambios en TODOS_V1');
        setStorageChange(true);
      }
    });

    const toggleShow = () => {
      props.sincronize();
      setStorageChange(false);
    };

    return {
      show: storageChange,
      toggleShow,
    } 
  }


export { useWithStorageListener };