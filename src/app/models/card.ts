export interface card{
    cardId:number;
    customerId:number;
    ownerName:string
    creditCardNumber:string
    expirationDate:string
    securityCode:string
    debts?:number
}