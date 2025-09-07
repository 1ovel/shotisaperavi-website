import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'menuSection',
  title: 'Menu Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'decorator',
      title: 'Decorator',
      type: 'string',
      description: 'Decorative text or symbol for the section',
    }),
    defineField({
      name: 'menu',
      title: 'Menu',
      type: 'reference',
      to: {type: 'menu'},
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'decorator',
      menu: 'menu.location.title',
    },
    prepare(selection) {
      const {title, subtitle, menu} = selection
      return {
        title: title,
        subtitle: `${subtitle || ''} - ${menu || 'No menu'}`,
      }
    },
  },
})
