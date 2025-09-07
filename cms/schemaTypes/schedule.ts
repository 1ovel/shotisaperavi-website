import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'schedule',
  title: 'Schedule',
  type: 'document',
  fields: [
    defineField({
      name: 'days',
      title: 'Days',
      type: 'string',
      description: 'e.g., "MON - FRI" or "WEEKENDS"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'openTime',
      title: 'Opening Time',
      type: 'string',
      description: 'e.g., "09.00"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'closeTime',
      title: 'Closing Time',
      type: 'string',
      description: 'e.g., "22.00"',
      validation: (Rule) => Rule.required(),
    }),
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
      title: 'days',
      subtitle: 'openTime',
      location: 'location.title',
    },
    prepare(selection) {
      const {title, subtitle, location} = selection
      return {
        title: title,
        subtitle: `${subtitle} - ${location || 'No location'}`,
      }
    },
  },
})
