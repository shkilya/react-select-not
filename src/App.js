import logo from './logo.svg';
import './App.css';
import Select from 'react-select';
import {useState} from "react";

const Dropdown = () => {
    const [selectedValue, setSelectedValue] = useState({value: 2, label: 'Strawberry'})

    const optionList = [
        {value: 1, label: 'Chocolate'},
        {value: 2, label: 'Strawberry'},
        {value: 3, label: 'Vanilla'},
        {value: 4, label: 'RRVanilla'},
        {value: 5, label: 'Vanilla656'},
    ]

    const setRandom = () => {
        const r = optionList[Math.floor(Math.random()*optionList.length)]
        setSelectedValue(r)
    }

    return (
        <>
            <button onClick={setRandom}>click</button>
            <Select
                value={selectedValue}
                onChange={(select) => {
                    console.log(select);
                    setSelectedValue(select)
                }}
                options={optionList}
            />
        </>
    )

}

function App() {
    return (
        <div className="App">
            <Dropdown/>
        </div>
    );
}

export default App;
