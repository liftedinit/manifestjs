import * as _110 from "./applications/transfer/v1/genesis";
import * as _111 from "./applications/transfer/v1/query";
import * as _112 from "./applications/transfer/v1/transfer";
import * as _113 from "./applications/transfer/v1/tx";
import * as _114 from "./applications/transfer/v2/packet";
import * as _115 from "./core/channel/v1/channel";
import * as _116 from "./core/channel/v1/genesis";
import * as _117 from "./core/channel/v1/query";
import * as _118 from "./core/channel/v1/tx";
import * as _119 from "./core/client/v1/client";
import * as _120 from "./core/client/v1/genesis";
import * as _121 from "./core/client/v1/query";
import * as _122 from "./core/client/v1/tx";
import * as _123 from "./core/commitment/v1/commitment";
import * as _124 from "./core/connection/v1/connection";
import * as _125 from "./core/connection/v1/genesis";
import * as _126 from "./core/connection/v1/query";
import * as _127 from "./core/connection/v1/tx";
import * as _128 from "./lightclients/localhost/v1/localhost";
import * as _129 from "./lightclients/solomachine/v1/solomachine";
import * as _130 from "./lightclients/solomachine/v2/solomachine";
import * as _131 from "./lightclients/tendermint/v1/tendermint";
import * as _233 from "./applications/transfer/v1/tx.amino";
import * as _234 from "./core/channel/v1/tx.amino";
import * as _235 from "./core/client/v1/tx.amino";
import * as _236 from "./core/connection/v1/tx.amino";
import * as _237 from "./applications/transfer/v1/tx.registry";
import * as _238 from "./core/channel/v1/tx.registry";
import * as _239 from "./core/client/v1/tx.registry";
import * as _240 from "./core/connection/v1/tx.registry";
import * as _241 from "./applications/transfer/v1/query.lcd";
import * as _242 from "./core/channel/v1/query.lcd";
import * as _243 from "./core/client/v1/query.lcd";
import * as _244 from "./core/connection/v1/query.lcd";
import * as _245 from "./applications/transfer/v1/query.rpc.Query";
import * as _246 from "./core/channel/v1/query.rpc.Query";
import * as _247 from "./core/client/v1/query.rpc.Query";
import * as _248 from "./core/connection/v1/query.rpc.Query";
import * as _249 from "./applications/transfer/v1/tx.rpc.msg";
import * as _250 from "./core/channel/v1/tx.rpc.msg";
import * as _251 from "./core/client/v1/tx.rpc.msg";
import * as _252 from "./core/connection/v1/tx.rpc.msg";
import * as _271 from "./lcd";
import * as _272 from "./rpc.query";
import * as _273 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._110,
        ..._111,
        ..._112,
        ..._113,
        ..._233,
        ..._237,
        ..._241,
        ..._245,
        ..._249
      };
      export const v2 = {
        ..._114
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._115,
        ..._116,
        ..._117,
        ..._118,
        ..._234,
        ..._238,
        ..._242,
        ..._246,
        ..._250
      };
    }
    export namespace client {
      export const v1 = {
        ..._119,
        ..._120,
        ..._121,
        ..._122,
        ..._235,
        ..._239,
        ..._243,
        ..._247,
        ..._251
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._123
      };
    }
    export namespace connection {
      export const v1 = {
        ..._124,
        ..._125,
        ..._126,
        ..._127,
        ..._236,
        ..._240,
        ..._244,
        ..._248,
        ..._252
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._128
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._129
      };
      export const v2 = {
        ..._130
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._131
      };
    }
  }
  export const ClientFactory = {
    ..._271,
    ..._272,
    ..._273
  };
}