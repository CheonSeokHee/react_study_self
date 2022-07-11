import React from "react";

function Device(data){
    console.log("JSON으로 받은 객체: ", JSON.stringify(data)); //변수 값, 배열, 객체 등을 문자열로 출력해줌
    //const{mydevice} = data; //상수를 선언할 때 사용 변수의 반대의 개념, 한번 대입하면 값을 변경할 수 없음
    return (
        <div>My {data.mydevice}, {data.myfavoritecolor}</div>
    );
}
export default Device;