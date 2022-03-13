export default {
    name : "abouts",
    title: "Abouts",
    type: 'document',
    fields :[
        {
            name:"name",
            title:"Name",
            type:"string",
        },
        {
            name:"description",
            title:"Description",
            type:"string",
        },
        {
            name:"imgurl",
            title:"ImgUrl",
            type:"image",
            options :{
                hotspot:true,
            },
        },
    ]
}