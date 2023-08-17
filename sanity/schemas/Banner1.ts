export const Banner1 = {
  name: 'banner1',
  type: 'document',
  title: 'Banner 1',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
    },
    {
      name: 'paragraph',
      title: 'Paragraph',
      type: 'string',
    },
    {
      name: 'brands',
      title: 'Brands',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
}
