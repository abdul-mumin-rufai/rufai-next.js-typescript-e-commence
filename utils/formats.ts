export const currencyOfGhana = async (amount: number | null) => {
    const value = amount || 0;
    return new Intl.NumberFormat('en-GH', {
        style: 'currency',
        currency: 'GHS'
    }).format(value);
};

export const formatDate = (date: Date) => { 
    return new Intl.DateTimeFormat('en-GH', {
        year: 'numeric',
        month: 'long',
        day:'numeric'
    }).format(date);
};