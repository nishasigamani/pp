import React, { useEffect, useState } from 'react'

function Form()
{
    // <div className='form'>
    const data={name:"",budget:"",phno:"",mail:""};
    const[inputData, setInputData]=useState(data)
    const [flag,setFlag]=useState(false)
    useEffect(()=>{
        console.log("registered")
    },[flag]
    )
    function handleData(e)
    {
        setInputData ({...inputData,[e.target.name]:e.target.value})
        console.log(inputData)
    }
    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.budget || !inputData.phno||!inputData.mail)
        {
            alert("ALL FIELDS ARE MANDATORY")
        }
        else
        {
            setFlag(true)
        }
    }
    return(
        <>
        <pre>{(flag)?<h2 className='ui-define'>HELLO  { inputData.name}  , YOUR QUOTE WILL BE READY WITHIN 2 DAYS AND IT WILL BE MAILED TO YOU</h2>:""}</pre>
        <form className='container' onSubmit={handleSubmit}>
            <div className='header'>
                     <h1>REGISTER NOW TO GET A FREE QUOTATION</h1>
            </div>
            <div className='h1'>
                <input type='text'placeholder='Enter Your Name' name='name' value={inputData.name} onChange={handleData}></input>
            </div>
            <div className='h1'>
                <input type='text'placeholder='Enter Your Budget' name='budget' value={inputData.budget} onChange={handleData}></input>
            </div>
            <div className='h1'>
                <input type='text'placeholder='Enter phnno' name='phno' value={inputData.phno} onChange={handleData}></input>
            </div>
            <div className='h1'>
                <input type='text'placeholder='Enter your mail' name='mail' value={inputData.mail} onChange={handleData}></input>
            </div>
            <div className='h2'>
                <button type='submit'>SUBMIT</button>
            </div>
        </form>
        </>
        // </div>
    )
}
export default Form;