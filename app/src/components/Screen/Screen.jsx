import React from 'react';
import { connect } from 'react-redux';

class Screen extends React.Component {
    render() {
        console.log(this.props.skills);
        const newSkills = this.props.skills.map(function(skill){
            return <li>{skill}</li>;
        });
        return(
            <div className={this.props.background} >
                <label>Name: </label>
                <p>{this.props.name}</p>
                <label>Age: </label>
                <p>{this.props.age}</p>
                <label>Skills: </label>                
                <ul>{newSkills}</ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.appReducer.name,        
        age: state.appReducer.age,
        skills: state.appReducer.skills,
        background: state.appReducer.background
    }
}


export default connect(mapStateToProps)(Screen);

// export default Screen;