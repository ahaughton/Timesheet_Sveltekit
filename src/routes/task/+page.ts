import { json } from "@sveltejs/kit";
import type {PageLoad} from './$types';

// export const load = async() => {
//     console.log ("products load Function");
    //const tasklocal = await (await  import ('$lib/Task_local.json')).default
    //console.log (tasklocal)
    //const taskresponse = await fetch('https://dummyjson.com/products')
    
  export const load = async({fetch}) => {
  console.log('attempting to fetch')
  //const response = await fetch('https://dummyjson.com/products');
  const response = await fetch('http://192.168.4.213:4000/graphql',{
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
      },
    body: JSON.stringify({
        query:`query Tasks {
            Tasks {
                id
                projectname
                projectowner
                projectdescription
                activities {
                    jobdescription
                    user_name
                    jobcategory
                    timestart
                    timestop
                    comments
                }
            }
        }
         `,variables:{}
    }),
    
  });
  
  if (response.ok){
    console.log(response) 
    return {a: await response.json() }
}  
 
    // if (taskresponse.ok){
    //     const resJson = await taskresponse.json();
    //     return json(resJson,{status:200}) 

    //    console.log(resJson) 
    // }
}
