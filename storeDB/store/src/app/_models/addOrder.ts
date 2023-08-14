export interface addOrder {
    
    Id : number ;
    ProductName : number ;
    Price : number ;
    Quantity : number ;
    Total : number ;
    
    }

    
    export interface response {
        sucsses: boolean;
        errorMsg: string;
        data : addOrder;


    }

    