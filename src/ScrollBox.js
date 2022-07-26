import cli from "npm/lib/cli";
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
        } // 여기에는 왜 세미콜론이 안붙는거야?


        return(
            <div
            style={style}
            ref={(ref) => {this.box=ref}}>
            <div style={innerStyle}/>
            </div>
        );

    }

}

export default ScrollBox;