/*
How will I populate this list?
 - I can do it manually for on load
 - I can do it automated on build based on post slug list maybe?

    How do I return the right data when filter is applied?
    Will need a service most likely?

*/ 
export default [
    {
        type: 'devotional',
        data: {
            title: '',
            dek: '',
            tags: '' // show 4
        }
    },
    {
        type: 'verse',
        data: {
            passage: '',
            scripture: '',
            tags: [] //??
        }
    }
]