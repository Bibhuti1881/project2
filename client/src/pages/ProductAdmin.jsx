import Axios from "../utils/Axios";
import AxiosToastError from "../utils/AxiosToastError";
import React, { useEffect, useState } from "react";
import SummaryApi from "../common/SummaryApi";

const ProductAdmin = () => {
  const [productData,setProductData] = useState([])
  const [page,setPage] = useState(1)

  const fetchProductData = async()=>{
    try{
      const response = await Axios({
        ...SummaryApi.getProduct,
        data : {
          page : page,
        }
        
      })
      const { data : responseData } = response 

      console.log(responseData)
      if(responseData.success){
        setProductData(responseData.data)
      }
    } catch(error){
      AxiosToastError(error)
    }    
  }
  // useEffect(()=>{
  //   fetchProductData()
  // })

  // useEffect(()=>{
  //   fetchProductData()
  // })
  return (
    <div>
      ProductAdmin
    </div>
  );
}

export default ProductAdmin;
