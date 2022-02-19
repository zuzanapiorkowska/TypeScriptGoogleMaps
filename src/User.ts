import faker from "faker";
//@types/faker pobiera mi types definition file
export class User {
   name: string;
   lastName: string;
   location: {
       lat: number;
       lng: number;
   };

   constructor(){
       this.name = faker.name.firstName();
       this.lastName=faker.name.lastName();
       this.location = {
           lat: parseFloat(faker.address.latitude()),
           lng: parseFloat(faker.address.longitude())
       }
   }
}