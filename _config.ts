import lume from "lume/mod.ts";
import wiki from "wiki/mod.ts";

const site = lume();
site.remoteFile('_includes/main.vto', 'https://raw.githubusercontent.com/lumeland/theme-simple-wiki/refs/heads/main/src/_includes/layout.vto');
site.use(wiki());

export default site;
