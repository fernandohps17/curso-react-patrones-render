import React, { useEffect, useState } from 'react';

function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = useState(initialValue)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [sincronizedItem, setSincronizedItem] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
    
                if (!localStorageItem) {
                    localStorage.setItem('TODOS_V1', JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem)
                    setItem(parsedItem)
                }
    
                setLoading(false);
            } catch(error) {
                setLoading(false);
                setError(true);
                setSincronizedItem(true)
            }
        }, 2000)
    }, [])

    const saveItem = (newItem) => {
        localStorage.setItem('TODOS_V1', JSON.stringify(newItem))
        setItem(newItem)
    }

    const sincronize = () => {
        setLoading(true);
        setSincronizedItem(false)
    }

    return { item, saveItem, loading, error, sincronizedItem };

}

export { useLocalStorage };