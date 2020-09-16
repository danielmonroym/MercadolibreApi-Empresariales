export class ItemDetails {
    title: string;
    base_price: number;
    original_price: number;
   seller_address: 
       {
           city:{
               id:string;
               name:string;
           }
           state:{
            id:string;
            name:string;
           }
       };
   
    id: string;
}