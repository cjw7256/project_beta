import { Outlet, useNavigate } from "react-router-dom";
import { Nav, Tab, Tabs } from "react-bootstrap";
import { useState, useEffect} from "react";

function Info() {
  let navigate = useNavigate();

  let [tabIndex, setTabIndex] = useState(2);

  let [key, setKey] = useState("home");
  return (
    <div>
      <h1>info 부분</h1>
      <p>정보를 보여주는 페이지</p>

      <div style={{ backgroundColor: "lightgray" }}>
        내부 경로에 대한 내용 출력 부분
        <Outlet></Outlet>
      </div>

      <Nav variant="pills" defaultActiveKey="tab3">
        <Nav.Item>
          <Nav.Link
            eventKey="tab1"
            onClick={() => {
              navigate("/info/company");
              setTabIndex(0);
            }}
          >
            Company
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="tab2"
            onClick={() => {
              navigate("/info/location");
              setTabIndex(1);
            }}
          >
            Location
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="tab3"
            onClick={() => {
              navigate("/info");
              setTabIndex(2);
            }}
          >
            Info
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Content tabIndex={tabIndex}></Content>
      {
        // [<div>tab1</div>, <div>tab2</div>, <div>tab3</div>][2]
        // [<Tab1Comp/>, <Tab2Comp/>, <Tab3Comp/>][tabIndex]
      }

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <div>Tab1</div>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <div>Tab2</div>
        </Tab>
        <Tab eventKey="contact" title="Contact">
          <div>Tab3</div>
        </Tab>
      </Tabs>
    </div>
  );
}

function Content({ tabIndex }) {

    let [opaClass, setOpaClass] = useState('');


    //opaClass =>  '' -> aniTo
    useEffect( () => {
        //수행될 내용
        const timeout = setTimeout(()=>{
            setOpaClass('aniTo');
        }, 500);
        

        return()=> {
            setOpaClass('');
            clearTimeout(timeout);
        }
    }, [tabIndex])

    //opaClass State변수명이 바뀌면~ 화면을 다시 그린다 (재렌더링)
    //a = 10;
    //setA();
    //b = 20;
    //setB();
    //재렌더링하는 함수가 여러군데 애들이 근처에 뭉쳐있으면

  return (
    <div className={"aniFrom " + opaClass}>
      {
        [
          <div>
            Content 내용
            <h2>Company 탭 내용</h2>
          </div>,
          <div>
            Content 내용
            <h2>Location 탭 내용</h2>
          </div>,
          <div>
            Content 내용
            <h2>Info 탭 내용</h2>
          </div>,
        ][tabIndex]
      }
    </div>
  );

  // if( tabIndex == 0) {
  //     return (
  //         <div>
  //             Content 내용
  //             <h2>Company 탭 내용</h2>
  //         </div>
  //     )
  // } else if ( tabIndex == 1) {
  //     return (
  //         <div>
  //             Content 내용
  //             <h2>Location 탭 내용</h2>
  //         </div>
  //     )
  // } else {
  //     return (
  //         <div>
  //             Content 내용
  //             <h2>Info 탭 내용</h2>
  //         </div>
  //     )
  // }
}

export default Info;
