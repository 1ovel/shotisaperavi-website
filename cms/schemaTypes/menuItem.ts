import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'menuSection',
      title: 'Menu Section',
      type: 'reference',
      to: {type: 'menuSection'},
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'price',
      section: 'menuSection.title',
    },
    prepare(selection) {
      const {title, subtitle, section} = selection
      return {
        title: title,
        subtitle: `$${subtitle} - ${section || 'No section'}`,
      }
    },
  },
})
