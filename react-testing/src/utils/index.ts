

export const formatNumber = (value: number) => {
    if(value < 1000){
        return value;
    }else{
        return `${value/1000}K`
    }
}
