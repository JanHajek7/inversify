import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class myService {
  myfnc() {
    return "neco";
  }
  myfnc1() {
    return "neco";
  }
  myfnc2() {
    return "neco";
  }
}
