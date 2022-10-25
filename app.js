import axios from "axios";

async function get_Data(number){
const {data:data1} = await axios("https://jsonplaceholder.typicode.com/users/" + number)

const {data:data2} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+ number)
data1.posts = [data2.find((item)=> item.id==number)]

return data1;
}


export default get_Data;