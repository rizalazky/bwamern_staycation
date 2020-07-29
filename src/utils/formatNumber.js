export default (number)=>{
    const numberFormat=Intl.NumberFormat('id-ID');
    return numberFormat.format(number);
}