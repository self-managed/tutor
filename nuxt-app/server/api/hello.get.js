export default defineEventHandler((event)=>{
    const data = [
        {
            name: "Tester1",
            age: 20,
        },
        {
            name: "Tester2",
            age: 25,
        },
        {
            name: "Tester3",
            age: 30,
        },
    ];
    return {data};
})