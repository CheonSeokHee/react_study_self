import React from "react";


function Device() {
 
    return <div>My</div>;
}
 
export default Device;
// const mydata = {
//     "myDeviceData":[
//       {
//         "name":"iPad Pro",
//         "RAM":6,
//         "HomeButton":false,
//         "TouchID":"No",
//         "FaceID":"Yes"
//       },{
//         "name":"iPhone Xs",
//         "RAM":4,
//         "HomeButton":false,
//         "TouchID":"No",
//         "FaceID":"Yes"
//       },{
//         "name":"iPhone 6",
//         "RAM":1,
//         "HomeButton":true,
//         "TouchID":"Yes",
//         "FaceID":"No"
//       }
//     ]
// };

//     // console.log("JSON으로 받은 객체: ", JSON.stringify(data)); //변수 값, 배열, 객체 등을 문자열로 출력해줌
//     // //const{mydevice} = data; //상수를 선언할 때 사용 변수의 반대의 개념, 한번 대입하면 값을 변경할 수 없음 <-> let
//     // return (
//     //     <div>My {data.mydevice}, {data.myfavoritecolor}</div>
   
//     function Device() {
//         return (
//             <div>
//                 {
//                     mydata.myDeviceData.map((myAppleDevice) => {
//                         console.log('idx is ' + JSON.stringify(myAppleDevice.name));
//                         return(
//                             <div>
//                                 이름 : { myAppleDevice.name } <br></br>
//                                 램 : { myAppleDevice.RAM }GB<br></br>
//                                 홈버튼 : { ((myAppleDevice.HomeButton === true) ? '있음' : '없음') } <br></br>
//                                 터치 ID : { myAppleDevice.TouchID } <br></br>
//                                 페이스 ID : { myAppleDevice.FaceID } <br></br><br></br>
//                              </div>
//                         );
//                     })
//                 }
//             </div>
//         );
     
//     }
     
//     export default Device;       