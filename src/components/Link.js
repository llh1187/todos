import React from 'react';

const Link = ({ active, children, onClick }) => (
		<button  disabled={active}  onClick={onClick} >
            {children}
        </button>
	)

export default Link;