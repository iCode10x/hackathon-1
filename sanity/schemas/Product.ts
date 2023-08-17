export const Product = {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'label',
        maxLength: 90,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'gender',
      title: 'Gender',
      type: 'string',
    },
    {
      name: 'price',
      title: 'price',
      type: 'number',
    },
    {
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    {
      name: 'care',
      title: 'Care',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
}
