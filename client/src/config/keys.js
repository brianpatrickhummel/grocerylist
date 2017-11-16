import { DEV_KEYS } from "./dev";
import { PROD_KEYS } from "./prod";
let keys;

if (process.env.NODE_ENV === "production") {
  keys = PROD_KEYS;
} else {
  keys = DEV_KEYS;
}

export default keys;
