import { useRouter } from "next/router";

const pageNo = () => {
    const router = useRouter();
    const pageNumber = router.query.pageNo;
    console.log(router.query);
    return (
      <>
        <div>
          <div><h2>url {pageNumber}</h2></div></div>
      </>
      
  
    );
  }
  
  export default pageNo;