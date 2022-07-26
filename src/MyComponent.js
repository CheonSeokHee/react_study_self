import React, { Component } from 'react';
import PropTypes from  'prop-types' ; 

class MyComponent extends Component { 
    static defaultProps = { 
        name : '기본 이름'
    }
        static propTypes = { 
        name : PropTypes.string , // name props 타입을 문자열로 설정합니다. 
        age : PropTypes.number.isRequired // 필수적으로 존재해야 하며， 숫자입니다
    }
        state = {
            number: 0
        }
render () { 
return ( 
    <div>
        <p>안녕하세요, 제 이름은 {this.props.name} 입니다.</p>
        <p>제 나이는 {this.props.age} 임.</p>
        <p>숫자 {this.state.number}  </p>
        <button onClick={() => { //화살표 함수를 써주지 않으면 위에 생성자에 this를 직접 설정해 주던가
                                 //그렇지 않으면 this가 뭔지 찾지 못함
            this.setState({
                number: this.state.number + 1
            })
        }
        }>더하기</button>    
</div>
)
}
}

export default MyComponent; 
