import React, {useState} from 'react';
import PropTypes from 'prop-types'
import ListElement from "./ListItem";
import {Form, FormControl} from "react-bootstrap";

const styles = {
    div: {
        position: "absolute",
        height: "auto",
        width: "20%",
        bottom: "2%",
        top: "76px",
        left: "1%",
        right: "0",
        background: "#efefef",
        borderRadius: "6px",
    },

    ul: {
        listStyle: "none",
        margin: 20,
        padding: 0,
        textAlign: "center"
    },

    button: {
        position: "absolute",
        bottom: "0"
    }
}

function List(props) {
    const [value, setValue] = useState('')
    return (
        <div className="border border-secondary" style={styles.div}>
            <h3 className="text-center">{props.listName}</h3>
            <Form onSubmit={(event) => {
                event.preventDefault()
                props.onSubmit(value)
            }}>
                <FormControl onChange={(event) => {
                    setValue(event.target.value)
                }}
                             type="text"
                             placeholder="Search"
                             className="mr-auto ml-auto text-center"
                />
            </Form>
            <ul className="mt-2" style={styles.ul}>
                {props.elements.map(element => {
                    return <ListElement element={element} key={element.id} onClick={props.onClick}/>
                })}
            </ul>
            <button style={styles.button} className="btn btn-primary btn-lg btn-block">Create</button>
        </div>
    )
}

List.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClick: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default List