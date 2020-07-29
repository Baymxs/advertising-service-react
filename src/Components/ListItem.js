import React from 'react';
import PropTypes from 'prop-types'

function ListItem({element, onClick}) {
    return <li onClick={() => onClick(element)}>{element.name}</li>
}

ListItem.propTypes = {
    element: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
}

export default ListItem