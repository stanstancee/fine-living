import { useState, useEffect } from 'react'

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}
/**
 * 
 * @returns 
 */
export const useWindowDimensions = () => {

    const [windowDimensions, setWindowDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
    useEffect(() => {
        const handleResize = () => setWindowDimensions(getWindowDimensions())
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);


    }, []);
    return windowDimensions
}

export const filterCategory = (category, products, positive = true) => {
    const check = positive ? (product) => product.category === category : (product) => product !== category
    return products.filter(check)
}

export const checkEven = (index) => {
    return index % 2 === 0
}

export const filterProduct = (products, id, categories = []) => {
    const idPresent = product => product.id === id
    const idNotPresent = product => product.id !== id
    const product = products.find(idPresent)
    const otherProducts = products.filter(idNotPresent).filter(prd => prd.category === product.category)
    const otherCategories = categories.filter((category)=> product.category !== category)




    return {
        product,
        otherProducts,
        otherCategories
    }



}