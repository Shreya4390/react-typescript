import axios from 'axios';


let url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3f48hXq1qn6MDQF0km2Pq6JKjF2y8MZluqX48coLg6PgDVAEfG347LFLpX1J-BhRrD_w&usqp=CAU'
const formData = new FormData();
formData.append('file',url);
formData.append('upload_preset', 'ml_default');
formData.append('cloud_name', 'dacfjv9vj');
formData.append('api_key', '136396448345868');
formData.append('api_secret', '53-YSAlklM7Oz8Rakkx2_6DmtA8');
const config = {
  headers: {
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': 'https://api.cloudinary.com',
    'Access-Control-Allow-Methods': 'PUT, POST, GET, OPTIONS',
    'Access-Control-Max-Age': '1728000',
    'Cache-Control': 'max-age=0, private, must-revalidate',
    'Connection': 'keep-alive',
    'Access-Control-Allow-Credentials': true,
    'Content-Type': 'application/json; charset=utf-8'
  }
}
var apiUrl = 'https://api.cloudinary.com/v1_1/dacfjv9vj/upload';
axios.post(apiUrl, formData, config).then((response) => {
  console.log(response.data.secure_url);
})