import React from 'react';
import './Button.scss';
import classNames from 'classnames';

function Button({ children, size, color }) {

  return <button className={classNames('Button', size, color)}>{children}</button>; // 버튼 클래스 이름을 동적으로 넣어주고 싶을 때 설정join('')

}

Button.defaultProps = {
  size : 'medium',
  color: 'pink'
}

export default Button;