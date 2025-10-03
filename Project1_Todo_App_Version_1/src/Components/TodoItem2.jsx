// Raja Ram Hemsworth => TodoItem2 React(XML) Code
function TodoItem2(){
    let itemName = "Go To College";
    let itemDate = "10/10/2025";
    return (
        <div class="container kg-row">
            <div class="row">
                <div class="col-6">{itemName}</div>
                <div class="col-4">{itemDate}</div>
                <div class="col-2">
                    <button type="button" class="btn btn-danger kg-button">Delete</button>
                </div>
            </div>
        </div>
    );
}
export default TodoItem2;