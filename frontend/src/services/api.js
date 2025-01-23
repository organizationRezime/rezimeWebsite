import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});


export const submitQuery = async (formData) => {
    return await api.post('/qeury/create', formData);
};

export const getCertificate = async(certificateId)=>{
  return await api.get(`/certificate/get/${certificateId}`);
}