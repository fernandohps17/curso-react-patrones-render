import React, { useState } from 'react';

function withStorageListener(WrapperComponent) {
    return function WrapperComponentWithStorageListener(prop) {

        const [storageChange, setStorageChange] = useState(false);

        window.addEventListener('storage', (change) => {
            if (change.key === 'TODOS_V1' ) {
                console.log('Hubo cambios en TODOS_V1')
                setStorageChange(true);
                // video 14 y 15 revisar bien para hacer funcionar la aplicacion
            }
        })

        return (
            <WrapperComponent 
                show={storageChange} 
                toggleShow={setStorageChange} 
            /> 
        )
    }
}

export { withStorageListener }