
export const transformCurrency = (value: number, currency: string) => {
    const precio_dolar = 59;
    return new Intl.NumberFormat('es-Mx', { style: 'currency', currency }).format(value * precio_dolar);
}