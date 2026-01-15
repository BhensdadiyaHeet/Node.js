import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function App() {

  const [formdata , setFormdata] = useState({})
  const [record , setRecord] = useState([])
  const [editIndex , setEditIndex] = useState(null)

  useEffect(()=>{
    fetchData();
  },[])

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(editIndex==null){
      await axios.post("http://localhost:2005/addData", formdata).then((res)=>{
        alert(res.data.msg);
    })
  }else{
    await axios.put(`http://localhost:2005/updateData?id=${editIndex}`, formdata).then((res)=>{
      alert(res.data.msg);
  })
  }
  fetchData();
  setEditIndex(null);
  setFormdata({
    name : '',
    age : '',
    city : ''
  });
}

const handleDelete = async (id) => {
  await axios.delete(`http://localhost:2005/deleteData?id=${id}`).then((res)=>{
    let newData = record.filter((item)=> item._id !== id);
    setRecord(newData); 
    alert(res.data.msg);
  })
}

 const handleEdit = (id) => {
  let singleData = record.find((item)=> item._id === id);
  setFormdata({
    name : singleData.name,
    age : singleData.age,
    city : singleData.city
  })
  setEditIndex(id);
 }

  const fetchData = async () =>{
    await axios.get("http://localhost:2005/getData").then((res)=>{
      // console.log(res.data);
      setRecord(res.data.data);
    })
  }

  return (
    <div>
      <h1>Crud with MERN</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your name' name='name' onChange={handleChange} value={formdata.name}/>
        <input type="number" placeholder='Enter your age' name='age' onChange={handleChange} value={formdata.age}/>
        <input type="text" placeholder='Enter your city' name='city' onChange={handleChange} value={formdata.city}/>
        <button type='submit'>{editIndex ? "Update Data" : "Add Data"}</button>
      </form>

      {
        record.map((e, i)=>{
          return <ul key={i}>
            <li>{e._id}</li>
            <li>{e.name}</li>
            <li>{e.age}</li>
            <li>{e.city}</li>
            <li><button onClick={()=>handleEdit(e._id)}>Edit</button></li>
            <li><button onClick={()=>handleDelete(e._id)}>Delete</button></li>
          </ul>
      })
      }
    </div>
  )
}
