import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

const Index = () => {
  const router = useRouter();
  // const pageNumber = router.query.pageNo;
  // const [val, setVal] = useState();

  const clickHandler = () => {
    router.push("/About");
  };

  return (
    <>
      <div>
        <div>
          <h2>All Pages</h2>
          <ul>
            <li>
              <Link href='/Home'>Home</Link>
            </li>

            <li>
              <Link href='/About'>About</Link>
            </li>
            <li>
              <Link href='/Services'>Services</Link>
            </li>
            <li>
              <Link href='/Contact'>Contact</Link>
            </li>
            <li>
              <Link href='/Products/Item'>Products</Link>
            </li>
          </ul>
          {/* <div onClick={() => router.push("/About")}>On Click</div> */}
          <div onClick={clickHandler}>On Click</div>
        </div>
      </div>
    </>
  );
};

export default Index;
