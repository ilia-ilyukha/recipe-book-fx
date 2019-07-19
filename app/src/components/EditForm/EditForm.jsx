import React from 'react';
import { connect } from 'react-redux';
import { closeEditFormAction } from '../../redux/actions/appActions';

class EditForm extends React.Component {
    closeEditForm = () => {
        this.props.closeEditFormProp();
    }

    render() {        
        const { flagEditForm } = this.props;
        return (
            <form method="POST" id="editEvent" className={flagEditForm ? "" : "inactive"}>
                <span>Name</span>
                <input value='' type="text" name="editName" />

                <span>Description</span>
                <input type="text" name="edittimepicker" />

                <input type="button" value="SAVE" id="saveDate" data-type="refresh" data-event-id='' />
                <input type="button" value="CLOSE" id="cancel" data-type="cancel" data-event-id='' onClick={this.closeEditForm}/>

            </form>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        flagEditForm: state.appReducer.flagEditForm
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeEditFormProp: () => dispatch(closeEditFormAction()),
    }
}
 export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
// export default EditForm;


