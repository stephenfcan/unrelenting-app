export default {
    name: 'collection',
    title: 'Collections',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'name',
            title: 'Collection Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            },
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        },
        {
            name: 'availability',
            title: 'Availability',
            type: 'boolean',
        },
        {
            name: 'products',
            title: 'Collection Products',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'product' } }],
        },
    ]
}