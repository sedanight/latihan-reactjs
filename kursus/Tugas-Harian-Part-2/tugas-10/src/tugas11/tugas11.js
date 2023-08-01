import React, { useState } from "react"
import "./tugas11.css"
const Tugas11 = () => {

    let [data, setData] = useState([
            {nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
            {nama: "Manggis", hargaTotal: 350000, beratTotal: 10000},
            {nama: "Nangka", hargaTotal: 90000, beratTotal: 2000},
            {nama: "Durian", hargaTotal: 400000, beratTotal: 5000},
            {nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000}
          ])
    let [input,setInput] = useState({
        nama:"",
        hargaTotal: 0,
        beratTotal: 0
})
let [currentIndex, setCurrentIndex]=useState(-1)


const handleDelete = (event) => {
    let index = parseInt(event.target.value)
    let deletedItem = data[index]
    let newData = data.filter((e) => {return e !== deletedItem})
    console.log(newData)
    setData(newData)
  }
const handleChange = (event) =>{
    let nameOfInput = event.target.name
    let valueOfInput = event.target.value
    
    //if(nameOfInput === "nama"){
       // setInput({...input, nama : valueOfInput})
    //}else if(nameOfInput === "hargaTotal"){
       // setInput({...input, hargaTotal : valueOfInput})
    //}//
    setInput({...input,[nameOfInput]: valueOfInput})
}
    const handleSubmit = (event) =>{
        event.preventDefault()
        let { nama, hargaTotal, beratTotal} = input
        let newData= data
        
        setData({...newData})
        setInput({
        nama:"",
        hargaTotal: 0,
        beratTotal: 0
        })

        if (currentIndex === -1) {
            newData = [...data,{nama,hargaTotal,beratTotal}]
          } else {
            newData[currentIndex] = data
           }
        
           
    }
    const handleEdit = (event) => {
        let index = parseInt(event.target.value)
        let editValue = data[index]
        setData(editValue)
        setCurrentIndex(event.target.value)
    }
    
    return(
        <>
            <div className = "container_table">
                <h2>Daftar Harga Buah</h2>
                <table id="customers">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Nama</th>
                            <th>Harga Total</th>
                            <th>Berat Total</th>
                            <th>Harga per kg</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                      {data !== null && (
                        <>
                            {data.map((res, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{res.nama}</td>
                                        <td>{res.hargaTotal}</td>
                                        <td>{res.beratTotal}</td>
                                        <td>{res.hargaTotal/(res.beratTotal/1000)}</td>
                                        <td>
      <button onClick={handleEdit} value={index}>Edit</button>
      <button onClick={handleDelete} value={index}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </>
                      )}
                    </tbody>
                    
                </table> 
            </div>
            <div className="container_form">
                <form onSubmit={handleSubmit} method="POST">
                    <label htmlFor="fname">Nama</label>
                    <input onChange={handleChange} value={input.nama} type ="text" id="fname" name="nama" placeholder="Your Name"/>

                    <label htmlFor="fharga">Harga Total</label>
                    <input onChange={handleChange} value={input.hargaTotal} type="number" id="fharga" name="hargaTotal" placeholder="Harganya"/>

                    <label htmlFor="fberat">Berat Total</label>
                    <input onChange={handleChange} value={input.beratTotal} type="number" id="fberat" name="beratTotal" placeholder="Beratnya"/>
                    
                    <input type="submit" value="submit"/>
                </form>
            </div>
        </>
    )
}
export default Tugas11