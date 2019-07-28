import React from 'react';
import { connect } from 'react-redux';
import { deleteRecipeAction } from '../../redux/actions/appActions';
import { showEditFormAction } from '../../redux/actions/appActions';

class RecipeList extends React.Component {

    showEditForm = (key) => {
        this.props.showEditFormProp(key);
    }

    deleteRecipe = (key) => {
        this.props.deleteRecipeProp(key);
    }

    getRecipes = () => {
        if (!this.props.recipes) {
            return null;
        }
        return this.props.recipes.map((recipe, key) => {
            return <p>
                {recipe.name} --- {recipe.description}
                <button
                    data-edit={key}
                    onClick={() => this.showEditForm(key)}
                >
                    EDIT
                </button>
                <button
                    data-delete={key}
                    onClick={() => this.deleteRecipe(key)}
                >
                    DELETE
                </button>
            </p>;
        });
    }

    render() {
        return (
            <div>
                {this.getRecipes()}
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.appReducer.recipes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteRecipeProp: (key) => dispatch(deleteRecipeAction(key)),
        showEditFormProp: (key) => dispatch(showEditFormAction(key))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);