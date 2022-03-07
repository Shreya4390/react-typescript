import axios from 'axios';
import { CLOUDINARY_URL, CLOUDINARY_UPLOAD_PRESET } from '../Config/config';

const uploadFileToCloudinary = async (file: any) => {

  if (!CLOUDINARY_UPLOAD_PRESET || !CLOUDINARY_URL) {
    throw new Error('CLOUDINARY_UPLOAD_PRESET or CLOUDINARY_URL not defined');
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
  const response = await axios.post(CLOUDINARY_URL, formData);
  return response.data.secure_url;
};

export { uploadFileToCloudinary };