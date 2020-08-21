import { Container } from "inversify";
import { myService } from "./my-service";

import "reflect-metadata";

const container = new Container();

container.bind(myService).toSelf().inSingletonScope();

export { container };
