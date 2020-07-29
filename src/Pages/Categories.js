import React, {useState} from 'react';
import List from "../Components/List";
import Form from "../Components/Form";

function Categories() {
    const [categories, setCategories] = useState([])

    const [fields, setFields] = useState([
        {name: "Id", value: ""},
        {name: "Name", value: ""},
        {name: "Request name", value: ""}
    ])

    async function handleSearchSubmit(value) {
        let response = await fetch('http://localhost:8443/api/v1/category/search?searchString=' + value)

        if (response.ok) {
            let json = await response.json();
            setCategories(json)
        } else {
            alert("Ошибка HTTP: " + response.status);
        }
    }

    function handleItemClick(element) {
        setFields(
            fields.map(field => {
                if (field.name === "Id") {
                    field.value = element.id
                } else if (field.name === "Name") {
                    field.value = element.name
                } else if (field.name === "Request name") {
                    field.value = element.requestName
                }

                return field
            })
        )
    }

    async function onClickDeleteButton() {
        let id = fields[0].value
        let response = await fetch('http://localhost:8443/api/v1/category/delete?categoryId=' + id, {
            method: 'DELETE'
        });

        if (response.ok) {
            let json = await response.json().catch(error => {
                alert("Категория успешно удалена")});
            if (json != null) {
                alert("Id не удаленных банеров, связанных с категорией " + json)
            }
        } else {
            alert("Ошибка HTTP: " + response.status);
        }
    }

    return (
        <>
            <List elements={categories} listName={"Categories"} onClick={handleItemClick}
                  onSubmit={handleSearchSubmit}/>
            <Form fields={fields} onClick={onClickDeleteButton}/>
        </>
    );
}

export default Categories;