import Input from "./Input.js"

const NewPerson = ({onChangeName, name, onChangeNumber, number, onClick}) => {
    return(
        <form>
            <Input label="Name" onChange={onChangeName} value={name}/>
            <Input label="Number" onChange={onChangeNumber} value={number}/>
            <div>
            <button onClick={onClick} type="submit">add</button>
            </div>
      </form>
    )
}

export default NewPerson
