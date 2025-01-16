import "./App.css";
import Axios from "./utils/Axios";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SummaryApi from "./common/SummaryApi";
import fetchUserDetails from "./utils/fetchUserDetails";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { setAllCategory, setAllSubCategory, setLoadingCategory } from "./store/productSlice";
import { setUserDetails } from "./store/userSlice";

// import { setAllCategory, setLoadingCategory } from "./store/productSlice";


function App() {
  
  const dispatch = useDispatch()
  const location = useLocation()

  const fetchUser = async()=>{
    const userData = await fetchUserDetails()
    dispatch(setUserDetails(userData.data))
}

const fetchCategory = async()=>{
  try {
      // dispatch(setLoadingCategory(true))
      const response = await Axios({
          ...SummaryApi.getCategory
      })
      const { data : responseData } = response

      if(responseData.success){
        // console.log("responseData.data",responseData.data)
         dispatch(setAllCategory(responseData.data.sort((a, b) => a.name.localeCompare(b.name)))) 
      }
  } catch (error) {
      
  }finally{
    // dispatch(setLoadingCategory(false))
  }
}
const fetchSubCategory = async()=>{
  try {
      const response = await Axios({
          ...SummaryApi.getSubCategory
      })
      const { data : responseData } = response

      if(responseData.success){
         dispatch(setAllSubCategory(responseData.data.sort((a, b) => a.name.localeCompare(b.name)))) 
      }
  } catch (error) {
      
  }finally{
  }
}


  useEffect(()=>{
    fetchUser()
    fetchCategory()
    fetchSubCategory()
    // fetchCartItem()
  },[])
  return (
    <>
    <Header/>
    <main className='min-h-[78vh]'>
      <Outlet/>
  </main>
  <Footer/>
  <Toaster/>
  </>
  )
}

export default App
