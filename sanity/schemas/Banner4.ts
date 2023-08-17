export const Banner4 = {
  name: 'banner4',
  title: 'Banner4',
  type: 'document',
  fields: [
    {
      name: 'bigText',
      title: 'Big text',
      type: 'string',
    },
    {
      name: 'headings',
      title: 'Headings',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'paragraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'bigParagraph',
      type: 'string',
      title: 'Big paragraph',
    },
  ],
}
