import React from 'react';
import { connect } from 'react-redux';
import { closeEditFormAction } from '../../redux/actions/appActions';

class EditForm extends React.Component {
    state = {name: '', description: ''};
    
    closeEditForm = () => {
        this.props.closeEditFormProp();
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

    componentDidUpdate(prevProps) {
        const { editRecipeKey, recipes } = this.props;
        
        if (this.props.editRecipeKey !== prevProps.editRecipeKey) {
            if(recipes[editRecipeKey] !== undefined){
                this.setState({
                    name: recipes[editRecipeKey].name,
                    description: recipes[editRecipeKey].description

                });
            }
        }
      }
    render() {
        const { flagEditForm, editRecipeKey, recipes } = this.props;
        
        console.log(recipes[editRecipeKey]);
        return (
            <form method="POST" id="editEvent" className={flagEditForm ? "" : "inactive"}>
                <span>Name</span>
                <input value={this.state.name} type="text" name="editName" onChange={this.onChangeName} />

                <span>Description</span>
                <input type="text" name="edittimepicker" onChange={this.onChangeDescription} value={this.state.description}/>

                <input type="button" value="SAVE" id="saveDate" data-type="refresh" data-event-id='' onClick={this.saveEditForm}/>
                <input type="button" value="CLOSE" id="cancel" data-type="cancel" data-event-id='' onClick={this.closeEditForm} />

            </form>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        flagEditForm: state.appReducer.flagEditForm,
        editRecipeKey: state.appReducer.editRecipeKey,
        recipes: state.appReducer.recipes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeEditFormProp: () => dispatch(closeEditFormAction()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
// export default EditForm;


