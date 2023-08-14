namespace storeDB.models{


  public class ResponseContract<T> {
    public  ResponseContract(){

   
     }
     public  ResponseContract(T data){

      Succeeded = true ;
      Massage = string.Empty;
      Errors= null;
      Data = data;
     }
     

     
   
     public T Data {get ; set ;}
     public bool Succeeded {get ; set ;}
     public string Massage {get ; set ;}
    public string[] Errors {get ; set ;}



     


    }


};