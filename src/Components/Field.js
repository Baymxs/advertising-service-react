import React from "react";
import PropTypes from "prop-types";

function Field({field, onChange}) {
    return <div className="form-group row">
        <label className="col-sm-2 col-form-label">{field.name}</label>
        <div className="col-sm-4">
            <input className="form-control" placeholder={field.name} value={field.value} onChange={(event) => {
                onChange(field.name, event.target.value)
            }}/>
        </div>
    </div>
}

Field.propTypes = {
    field: PropTypes.object.isRequired
}

export default Field