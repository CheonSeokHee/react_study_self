import React, { Component } from "react";


class ScrollBox extends Component{

    
    ScrollToBottom = () => {
        const { scrollHeight, clientHeight } = this.box;
        this.box.scrollTop = scrollHeight - clientHeight;
    }

    render(){

        const style = {
            border: '1px solid black', 
            height : '300px', 
            width : '300px', 
            overflow: 'auto',
            position : 'relative' 
        };

        const innerStyle = {
            width : '100%',
            height : '650px',
            background: 'linear-gradient(white, black)'
        }; // 여기에는 왜 세미콜론이 안붙는거야?

        const style1 ={
            backgroundColor: 'black',
            color: 'aqua',
            fontSize: 24, // 기본 단위 px
            padding: '1rem' // 다른 단위 사용 시 문자열로 설정
        }

        return(
            <div
            style={style}
            style1={style1}
            ref={(ref) => {this.box=ref}}>
            <div style={innerStyle}/>
            </div>
        );

    }

}

export default ScrollBox;