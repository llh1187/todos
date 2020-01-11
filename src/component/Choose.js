import React from 'react';

class Choose extends React.Component {
    render() {
        return (
            (this.props.link.length > 0) ? this.props.link.map((value, index) =>
                <button  key = {index} onClick={()=>this.props.handleAclick(index)} disabled={value.active}>
                        {value.text}
                    </button>) : ''
        )
    }
}
export default Choose;