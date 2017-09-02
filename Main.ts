import * as _ from 'underscore';


class Startup {
   public static main(): number {
      console.log('Hello Typescript World! (modified)');
      console.log('underscore says ', _.range(5));
      return 0;
   }
}

Startup.main();
