import React from 'react'
import { withStorageListener } from './withStorageListener'

const ChangeAlert = ({ show, toggleShow }) => {

    if (show) {
        return (
            <p>Hubo cambios</p>
        )
    } else {
        return null
    }
}

const CahngeAlertWithStorageListener = withStorageAlert(ChangeAlert);

export default { CahngeAlertWithStorageListener }
