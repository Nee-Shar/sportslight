import Post from "./Post";
import "../css/home.css";
import React, { useEffect, useState } from "react";
import { fetchAndExportData } from "./data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// function Home() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const fetchedData = await fetchAndExportData();
//       setData(fetchedData.slice(0, 3));
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="home">
//       <Container>
//         <Row lg="2">
//           <Col>
//             <h1>HIGHLIGHT OF THE DAY</h1>
//             <div className="news">
//               <img src="https://www.livemint.com/lm-img/img/2023/06/10/600x338/CRICKET-AUS-IND-122_1686374354398_1686374561248.jpg" />
//               <div className="main-news-text">
//                 <p>
//                   India end on 151/5 at Stumps on Day 2, all eyes today on
//                   Ajinkya Rahane
//                 </p>
//               </div>
//             </div>
//           </Col>
//           <Col lg="3">
//             <h1>TOP NEWS</h1>

//             <div>
//               <div>
//                 {data.map((feedback, index) => (
//                   <Post
//                     key={index}
//                     image={feedback.image}
//                     content={feedback.name}
//                     url={feedback.url}
//                   />
//                 ))}
//               </div>
//             </div>
//           </Col>
//           <Col lg="3"></Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchAndExportData();
      setData(fetchedData.slice(0, 4));
    };

    fetchData();
  }, []);

  return (
    <div className="home">
      <Container>
        <Row lg="2">
          <Col>
            <h1>HIGHLIGHT OF THE DAY</h1>
            <div className="news">
              <img src="https://www.livemint.com/lm-img/img/2023/06/10/600x338/CRICKET-AUS-IND-122_1686374354398_1686374561248.jpg" />
              <div className="main-news-text">
                <p>
                  India end on 151/5 at Stumps on Day 2, all eyes today on
                  Ajinkya Rahane
                </p>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h1>TOP NEWS</h1>
            <div className="post-container">
              {data.slice(0, 2).map((feedback, index) => (
                <Post
                  key={index}
                  image={feedback.image}
                  content={feedback.name}
                  url={feedback.url}
                  className="mb-2"
                />
              ))}
            </div>
          </Col>
          <Col lg="3" className="mt-auto mr-2 mb-2">
            <div className="post-container">
              {data.slice(2, 4).map((feedback, index) => (
                <Post
                  key={index}
                  image={feedback.image}
                  content={feedback.name}
                  url={feedback.url}
                  className="mb-2"
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
