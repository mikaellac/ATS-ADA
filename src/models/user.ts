import { Address } from "./address";
import Curriculum from "./curriculum";

export class User{

  constructor(
    public name:string,
    public photoUrl:string,
    public email:string,
    public password:string,
    public wage:number,
    public telephone:string,
    public address:Address,
    public curriculum:Curriculum

  ){

  }
}
