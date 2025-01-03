import React, { useEffect, useState } from 'react'
import PostItem from './PostItem';

const Posts = () => {
   const[post, setPost] = useState([])
   const[pages,setPages] = useState(1);
   
    const getData = async(val)=>{  
        try{
            const data = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${val}`);
            const response = await data.json();
            setPost(response);
        }
        catch(error){
            console.log("fetch error", error);
        }
    }

    useEffect(()=>{
      getData(pages);
    },[pages])
     const handlePage = (val)=>{
        const pageNo =  pages +val;
       setPages(pageNo);
       }
  return (
    <>
   {post.map((element)=>(
            <PostItem id={element.id} title={element.title}/>
   )    
   ) }
   <div style={{margin:"10px", display:"flex"}}>
    <button disabled={pages===1} onClick={()=>handlePage(-1)}>prev</button>
    <div>
        {new Array(10).fill(0).map((element,id)=>{
            return <button key={id} onClick={()=>setPages(id+1)}>{id+1}</button>
        })
        }
    </div>
    <button disabled={pages ===10} onClick={()=>handlePage(+1)}>Next</button>
   </div>
    </>
  )
}

export default Posts