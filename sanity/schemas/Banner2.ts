export const Banner2 = {
  name: 'banner2',
  title: 'Banner 2',
  type: 'document',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'mainTexts',
      title: 'Main texts',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'secondTexts',
      title: 'Second texts',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'thirdTexts',
      title: 'Third texts',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
}
