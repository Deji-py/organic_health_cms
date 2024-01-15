import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'Product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'category', title: 'category', type: 'string'},
            {name: 'amount', title: 'Amount', type: 'number'},
            {name: 'currency', title: 'Currency', type: 'string'},
          ],
        },
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {type: 'block'},
        // Allow for images in the content
        {type: 'image'},
        // Allow for video links in the content
        {type: 'object', name: 'video', fields: [{name: 'url', type: 'url'}]},
      ],
    }),
  ],
})
