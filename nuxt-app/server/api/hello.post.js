export default defineEventHandler((event)=>{
    const data = {
        name: "Hello post",
        age: 20,
    };
    return {data};
})