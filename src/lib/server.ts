import type { RequestHandler } from '../routes/task/$types';

export const GET: RequestHandler = async ({fetch}) => {
    const taskresponse = await fetch('https://dummyjson.com/products')

    if (taskresponse.ok){
        const resJson = await taskresponse.json();
        return json(resJson,{status:200}) 
    }

    console.log(taskresponse)
    return new Response();
};