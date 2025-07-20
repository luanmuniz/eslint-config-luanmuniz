import { defineConfig } from "eslint/config";
import configRules from "./index.js";

export default defineConfig([{
	extends: [ configRules ]
}]);
