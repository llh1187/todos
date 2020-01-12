import React from 'react';

const Choose = (props) => (
		<button  disabled={props.value.active}  onClick={props.handleAclick} >
            {props.value.text}
        </button>
	)

export default Choose;