import { Todos } from "./todos";

import Filter from "./filters";
import React from 'react'

function TodoApp() {
    return <div>
        <Todos />
        <Filter />
    </div>
}
export default TodoApp