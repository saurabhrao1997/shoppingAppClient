

export const onSubmitCallAPi =async(e,url,method,onResponce)=>{
    console.log("askjgkjakj",url)
  try {


 let response =   await fetch(url,{
      method:method,
      headers:{
        "Content-type": "application/json",
      },
      body:JSON.stringify(form)

    }) 
    if(response.status == 200){
        onResponce(response)
    //   let result = await response.json()
    //   console.log("result",result?.data?.token)
    //   if(result?.data == true){
    //   //   localStorage.setItem("token",result?.data?.token)
    //   //   localStorage.setItem("userId",result?.data?._id)
    //   //   localStorage.setItem("userName",result?.data?.Name)
    //     alert(`${result?.message}`)
    //     setStep(2)
    //     // navigate("/")
    //   }
    }
  } catch (error) {
   console.log("error",error) 
  }

}