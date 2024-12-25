import lumeCMS from "lume/cms/mod.ts";

const cms = lumeCMS();

cms.collection({
  name: 'pages: Exception pages',
  store: 'src:ex/**/*.md',
  fields: [
    {
      name: 'title',
      label: 'Exception name',
      type: 'text',
      description: 'The name of the exception',
    },
    {
      name: "ex_code",
      label: "Exception code",
      type: "number",
      description: "The exception code",
    },
    {
      name: 'exc_parent_name',
      label: 'Parent exception name',
      type: 'text',
      description: 'The parent exception name',
    },
    {
      name: 'exc_parent_code',
      label: 'Parent exception code',
      type: 'number',
      description: 'The parent exception code',
    },
    "content: markdown",
    {
      name: "resolutions",
      label: "Resolutions",
      type: "object-list",
      description: "Currently identifiable resolutions",
      fields: [
        "id: text",
        "title: text",
        "description: markdown",
        "content: markdown",
      ]
    },
    {
      name: "impl_notes",
      label: "Implementation notes",
      type: "markdown",
      description: "Implementation notes",
    },
    {
      name: 'layout',
      label: 'Layout',
      type: 'hidden',
      value: 'exception.vto'
    }
  ]
})

export default cms;
