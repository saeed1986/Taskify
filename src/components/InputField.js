import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TextField, Button, Box } from "@mui/material"; // Importing MUI components
var InputField = function (_a) {
    var todo = _a.todo, setTodo = _a.setTodo, handleAdd = _a.handleAdd;
    return (_jsxs("form", { onSubmit: handleAdd, children: [" ", _jsxs(Box, { display: "flex", justifyContent: "space-between", alignItems: "center", children: [_jsx(TextField, { value: todo, onChange: function (e) { return setTodo(e.target.value); }, label: "Enter a task", variant: "outlined", fullWidth: true, sx: { marginRight: 2 } }), _jsx(Button, { variant: "contained", color: "primary", type: "submit", sx: { marginLeft: 2 }, children: "Go" })] })] }));
};
export default InputField;
