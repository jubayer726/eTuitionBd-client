import axios from "axios";

export const imageUpload = async imageData =>{
    const formdata = new FormData();
  formdata.append("image", imageData);

  const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`, formdata)
     
    return data?.data?.display_url;
}

// Save or update users inf db
export const saveOrUpdateUser = async (userData)=>{
  const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/user`, userData)
  return data;
}