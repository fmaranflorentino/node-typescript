import req from 'supertest';
import server from './../src/server';

test('[GET] /api/route', async () => {
    const res = await req(server).get("/api/route");
    expect(res.status).toBe(200);
});