import React from 'react';
import { connect } from 'react-redux';
import { createRecipeAction } from '../../redux/actions/appActions';


class RecipeForm extends React.Component {
    state = {
        name: '',
        description: ''
    }

    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    onChangeDescription = (e) => {
        this.setState({
            description: e.target.value
        });
    }
    saveRecipe = () => {
        const { name, description } = this.state;

        this.props.createRecipeProp(name, description); 

        this.setState({
            name: '',
            description: ''
        });
    }

    render() {
        return (
            <form>
                <h1>RECIPE LIST</h1>
                <label className="item">
                    <span>Name</span>
                    <input
                        value={this.state.name}
                        type="text"
                        name="editName"
                        onChange={this.onChangeName}
                    />
                </label>
                <label className="item">
                    <span>Description</span>
                    <input
                        value={this.state.description}
                        type="text"
                        name="editDescription"
                        onChange={this.onChangeDescription}
                    />
                </label>

                <input
                    type="button"
                    value="ADD"
                    id="saveDate"
                    data-type="refresh"
                    data-event-id=''
                    onClick={this.saveRecipe}
                />
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createRecipeProp: (name, description) => dispatch(createRecipeAction(name, description)),
    }
}

export default connect(null, mapDispatchToProps)(RecipeForm);