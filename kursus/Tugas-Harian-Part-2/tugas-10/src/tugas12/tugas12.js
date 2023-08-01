import React, { useEffect, useState } from "react"
import axios from "axios"

const Tugas12 = () =>{
    const [dataMahasiswa,setDataMahasiswa] = useState(null)
    const [input, setInput] = useState({
        name : "",
        course : "",
        score : 0
    })
    const [currentId, setCurrentId]=useState(-1)
    const [fetchStatus, setFetchStatus]=useState(true)
    
    
    
    
    
    
    useEffect(() => {
    let fetch = async () => {
        try {
            let result = await axios.get(`https://backendexample.sanbercloud.com/api/student-scores`) 
            
            let data = result.data.map((res)=>{
                let {course,name,id,score}=res
                return{
                    id,
                    name,
                    score,
                    course
                }
            })
            setDataMahasiswa([...data])
        } catch (error) {
            console.log(error)
        }
        
    }
    if (fetchStatus) {
        fetch()
        setFetchStatus(false)
    }
    
    }, [fetchStatus,setFetchStatus])


    const handleIndexScore = (param) =>{
        if (param >= 80) {
             return "A"
        }else if(param >=70 & param <80){
            return "B"
        }else if(param >=60 & param <70){
            return "C"
        } else if(param >=50 & param <60){
            return "D"
        }  
        else{
            return "E"
        }
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

    const handleSubmit = (event) => {
        event.preventDefault()
    if (currentId === -1) {
        axios
        .post(`http://backendexample.sanbercloud.com/api/student-scores`,{name:input.name,course:input.course,score:input.score})
        .then((res)=>{
            setDataMahasiswa([...dataMahasiswa,{id:res.data.id, name:res.data.name, course: res.data.course, score:res.data.score}])
            setFetchStatus(true)
        })
        .catch((err)=>{
            console.log(err)
        })
    } else {
        axios
        .post(`http://backendexample.sanbercloud.com/api/student-scores/${currentId}`)
        .then((res)=>{
            let updatedItem = dataMahasiswa.find((e) => e.id === currentId)
            updatedItem.name = input.name;
            updatedItem.course = input.course;
            updatedItem.score = input.score;
            setDataMahasiswa([...dataMahasiswa])
        })
        
    }
        setInput({
            name : "",
            course : "",
            score : 0
        });
        setCurrentId(-1);

    }


    const handleEdit = (event) =>{
        let id= parseInt(event.target.value)
        axios.get(`http://backendexample.sanbercloud.com/api/student-scores/${id}`)
        .then((res)=>{
            setFetchStatus(true)
            let data = res.data
            let Obj = {
                name:data.name,
                course:data.course,
                score:data.score
            }
            setCurrentId(data.id);
            setInput(Obj);
        })
    }



    const handleDelete = (event) =>{
        let currentId = parseInt(event.target.value)
        axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${currentId}`)
        .then((res)=>{
            setFetchStatus(true)
        })
        .catch((err)=>{
            console.log(err.massage)
        })
    }

    return(
        <>
        <div className = "container_table">
            <h2>Tabel Nilai Mahasiswa</h2>
                <table id="customers">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Nama</th>
                            <th>Matakuliah</th>
                            <th>Nilai</th>
                            <th>Indeks Nilai</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        { dataMahasiswa !== null && (
                            <>
                            {dataMahasiswa.map((res,index)=>{
                                return(
                                    <tr key={res.id} >
                                        <td>{index+1}</td>
                                        <td>{res.name}</td>
                                        <td>{res.course}</td>
                                        <td>{res.score}</td>
                                        <td>{handleIndexScore(res.score)}</td>
                                        <td>
                                            <button onClick={handleEdit} value={res.id}>edit</button>
                                            <button onClick={handleDelete} value={res.id}>delete</button>
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
            <h2>Form Nilai Mahasiswa</h2>
                <form onSubmit={handleSubmit} method="POST">
                    <label htmlFor="fname">Nama</label>
                    <input onChange={handleChange} value={input.name} type="text" id="fname" name="name" placeholder="Your Name"/>

                    <label htmlFor="fname">Mata Kuliah</label>
                    <input onChange={handleChange} value={input.course} type="text" id="fname" name="course" placeholder="Harganya"/>

                    <label htmlFor="fname">Nilai</label>
                    <input onChange={handleChange} value={input.score}type="number" id="fname" name="score" placeholder="Beratnya"/>
                    
                    <input type="submit" value="submit"/>
                </form>
         </div>

        </>
    )
}
export default Tugas12