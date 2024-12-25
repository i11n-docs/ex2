import lume from "lume/mod.ts";
import wiki from "wiki/mod.ts";
import prism from "lume/plugins/prism.ts";
import "npm:prismjs@1.29.0/components/prism-typescript.js";

const site = lume();

site.remoteFile('_includes/main.vto', 'https://raw.githubusercontent.com/lumeland/theme-simple-wiki/refs/heads/main/src/_includes/layout.vto');
site.use(prism({
  theme: {
    name: 'dark',
    path: '/static/css/prism.css',
  }
}));

site.copy('/static')
site.use(wiki());

export default site;
