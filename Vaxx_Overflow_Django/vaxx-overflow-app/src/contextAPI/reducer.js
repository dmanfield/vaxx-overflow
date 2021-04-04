export const initialState = {
    form: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        organizationName: "",
        organizationEmail: "",
        phoneNumber: "",
    }
    
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_FIRST_PAGE":
            return {
                ...state,
                form: {
                    ...state.form,
                    firstName: action.item.firstName,
                    lastName: action.item.lastName,
                    email: action.item.email,
                    password: action.item.password
                }
            }
        case "ADD_SECOND_PAGE":
            return {
                ...state,
                form: {
                    ...state.form,
                    organizationName: action.item.organizationName,
                    organizationEmail: action.item.organizationEmail,
                    phoneNumber: action.item.phoneNumber
                }
            }
        default:
            return state;
    }
}

export default reducer;