import lume from "lume/mod.ts";
import lumocs from "lumocs/mod.ts";

const site = lume();
site.remoteFile('_includes/page.njk', 'https://raw.githubusercontent.com/Hexagon/lumocs/refs/heads/main/src/_includes/page.njk');
site.use(lumocs());

export default site;
