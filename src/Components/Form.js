import React from 'react';
import Field from "./Field";
import PropTypes from "prop-types";

const DataStyles = {
    position: "absolute",
    height: "auto",
    width: "auto",
    bottom: "2%",
    top: "76px",
    left: "22%",
    right: "1%",
    background: "#efefef",
    borderRadius: "6px"
}

const SaveButtonStyles = {
    position: "absolute",
    bottom: "0",
    width: "150px"
}

const DeleteButtonStyles = {
    position: "absolute",
    bottom: "0",
    right: "0",
    width: "150px"
}

function Form(props) {
    return (
        <div className="border border-secondary" style={DataStyles}>
            <form className="ml-4 mt-4">
                {props.fields.map(field => {
                    if (field.name === "Id") {
                        return (
                            <div className="form-group row" key={"Id "}>
                                <label className="col-sm-2 col-form-label">Id</label>
                                <div className="col-sm-4">
                                    <label className="col-sm-2 col-form-label" >{field.value}</label>
                                </div>
                            </div>
                        )
                    }
                    return <Field field={field} key={field.name} onChange={props.onChange}/>
                })}
            </form>
            <button style={SaveButtonStyles} className="btn btn-primary btn-lg btn-block"
                    onClick={props.onClickSave}>Save
            </button>
            <button style={DeleteButtonStyles} className="btn btn-danger btn-lg btn-block"
                    onClick={props.onClickDelete}>Delete
            </button>
        </div>
    )
}

Form.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClickDelete: PropTypes.func.isRequired,
    onClickSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Form