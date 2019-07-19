import React from 'react';
import { connect } from 'react-redux';
import { changeNameAction } from '../../redux/actions/appActions';
import { changeAgeAction } from '../../redux/actions/appActions';
import { changeSkillsAction } from '../../redux/actions/appActions';

class Inputs extends React.Component {
    state = {
        name: '',
        age: '',
        skills: []
    }

    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    onChangeAge = (e) => {
        this.setState({
            age: e.target.value
        });
    }

    onChangeSkills = (e) => {
        this.setState({
            skills: e.target.value
        });
    }
    
    submitValue = () => {
        const { name, age, skills } = this.state;

        this.props.changeNameProp(name);
        this.props.changeAgeProp(age);
        this.props.changeSkillsProp(skills);   
    }

    render() {

        const { name, age, skills } = this.state;
        return (
            <div>
                <label>Name</label>

                <input onChange={this.onChangeName} value={name} />
                <label>Age</label>
                <input onChange={this.onChangeAge} value={age} />
                <label>Skills</label>
                <input onChange={this.onChangeSkills} value={skills} />

                <button onClick={this.submitValue}>Submit</button>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeNameProp: (name) => dispatch(changeNameAction(name)),
        changeAgeProp: (age) => dispatch(changeAgeAction(age)),
        changeSkillsProp: (skills) => dispatch(changeSkillsAction(skills))
    }
}

export default connect(null, mapDispatchToProps)(Inputs);

// export default Inputs;