export default defineEventHandler((event)=>{
    const data = {
        name: "Hello delete",
        age: 20,
    };
    return {data};
})