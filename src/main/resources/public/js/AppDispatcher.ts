import * as Flux from "flux";

class AppDispatcher extends Flux.Dispatcher<any> {

  constructor() {
    super();
  }
}

export default new AppDispatcher();
