import React from 'react';
import { connect } from 'react-redux';
import { changeBack } from '../../redux/actions/appActions';

class Buttons extends React.Component {

    onBackRed = () => {        
        this.props.changeBack('red');
    }
    onBackGreen = () => {        
        this.props.changeBack('green');
    }

    onBackBlue = () => {        
        this.props.changeBack('blue');
    }


    render() {
        return(
            <div>
                <button onClick={this.onBackRed}>Red</button>
                <button onClick={this.onBackGreen}>Green</button>
                <button onClick={this.onBackBlue}>Blue</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeBack: (background) => dispatch(changeBack(background))
    }
}

export default connect(null, mapDispatchToProps)(Buttons);