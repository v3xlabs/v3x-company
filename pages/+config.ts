import type { Config } from "vike/types";
import vikeSolid from "vike-solid/config";

export default {
  // https://vike.dev/head-tags
  title: "V3X Labs",
  description: "a community of open-source developers driven to make a difference.",
  prerender: {
    noExtraDir: true,
    parallel: false
  },
  port: 5173,
  extends: [vikeSolid],
} satisfies Config;
