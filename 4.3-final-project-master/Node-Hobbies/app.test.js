import supertest from 'supertest';
import server from 'server.js';



describe("POST /hobbies",()=>{
 describe("when given a hobby name",()=>{
    test("should respond with status 200",async ()=>{
        const res =  await request(server).post("/hobbies").send({
            name:"hobby"
        })
        expect(res.statusCode).toBe(200);

       

    })

    test("should specify json in content type header",async ()=>{
        const res =  await request(server).post("/hobbies").send({
            name:"hobby"
        })
        expect(res.headers['content-tyoe']).toEqual(expect.StringContaining)("json");
    })

    test("should specify have id",async ()=>{
        const res =  await request(server).post("/hobbies").send({
            name:"hobby"
        })
        expect(res.body._id).toBeDefined();
    })
   
   

 })
});