import React, {useState} from 'react';
import List from "../Components/List";
import Form from "../Components/Form";


function Banners() {
    const [banners, setBanners] = useState([])

    const [fields, setFields] = useState([
        {name: "Id", value: ""},
        {name: "Name", value: ""},
        {name: "Price", value: ""},
        {name: "Category", value: ""},
        {name: "Content", value: ""}
    ])

    async function handleSearchSubmit(value) {
        let response = await fetch('http://localhost:8443/api/v1/banner/search?searchString=' + value)

        if (response.ok) {
            let json = await response.json();
            setBanners(json)
        } else {
            alert("Ошибка HTTP: " + response.status);
        }
    }

    async function onClickDeleteButton() {
        let id = fields[0].value
        let response = await fetch('http://localhost:8443/api/v1/banner/delete?bannerId=' + id, {
            method: 'DELETE'
        });

        if (response.ok) {
            alert("Удаление баннера прошло успешно");
        } else {
            alert("Ошибка HTTP: " + response.status);
        }
    }

    async function onClickSaveButton() {
        console.log(fields)
    }

    function handleItemClick(element) {
        setFields(
            fields.map(field => {
                if (field.name === "Id") {
                    field.value = element.id
                } else if (field.name === "Name") {
                    field.value = element.name
                } else if (field.name === "Price") {
                    field.value = element.price
                } else if (field.name === "Content") {
                    field.value = element.content
                }

                return field
            })
        )
    }

    function onChange(name, value) {
        setFields(
            fields.map(field => {
                if (field.name === name) {
                    field.value = value
                }
                return field
            })
        )
    }

    return (
        <>
            <List elements={banners} listName={"Banners"} onClick={handleItemClick} onSubmit={handleSearchSubmit}/>
            <Form fields={fields} onClickSave={onClickSaveButton} onClickDelete={onClickDeleteButton} onChange={onChange}/>
        </>
    );
}

export default Banners;