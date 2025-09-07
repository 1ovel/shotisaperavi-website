import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    defineField({
      name: 'location',
      title: 'Location',
      type: 'reference',
      to: {type: 'location'},
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'location.title',
      subtitle: 'location.address',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title: `Menu - ${title}`,
        subtitle: subtitle,
      }
    },
  },
})
