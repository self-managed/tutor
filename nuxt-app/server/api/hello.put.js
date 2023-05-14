export default defineEventHandler((event)=>{
    const data = {
        name: "Hello put",
        age: 20,
    };
    return {data};
})