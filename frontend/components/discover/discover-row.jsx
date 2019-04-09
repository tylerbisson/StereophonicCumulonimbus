import React from 'react';

class DiscoverRow extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <> 
                <div className="discover-row">
                    <h1 className="discover-row-name">{this.props.name}</h1>
                    <h2 className="discover-row-subtitle">{this.props.subtitle}</h2>
                    <ul className="discover-row-recordings-list">
                        {this.props.recordingItems}
                    </ul>
                </div>
            </>
        )
    }
}

export default DiscoverRow;