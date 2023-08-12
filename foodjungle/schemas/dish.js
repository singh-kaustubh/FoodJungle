import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: "Name of dish",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: "Short Description",
      validation: (Rule) => Rule.max(200)
    }),
    defineField({
      name: 'price',
      type: 'string',
      title: "Price of the dish in Rs",
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: "Image of the Dish",
      validation: (Rule) => Rule.required()
    }),
  ],
})
