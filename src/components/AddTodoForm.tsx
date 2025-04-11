import Button from "./Button"

function AddTodoForm() {
  return (
    <form>
        <h2 className="font-medium text-[#231d15]">Add a todo</h2>
        <input type="text" className="h-[45px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full px-[16px]" placeholder="Enter a Task" />

        <Button buttonType='primary'>Add to list</Button>
    </form>
  )
}

export default AddTodoForm