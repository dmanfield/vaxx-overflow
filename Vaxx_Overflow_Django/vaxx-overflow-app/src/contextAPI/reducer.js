export const initialState = {
    form: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        organizationName: "",
        organizationEmail: "",
        phoneNumber: "",
    },
    user_form: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: "",
        phone: "",
        zipcode: "",
        dateOfBirth: "",
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


        case "ADD_USER_FIRST_PAGE":
                return {
                    ...state,
                    user_form: {
                        ...state.user_form,
                        firstName: action.item.firstName,
                        lastName: action.item.lastName,
                        email: action.item.email,
                        password: action.item.password,                    
                    }
                }

        case "ADD_USER_SECOND_PAGE":
            return {
                ...state,
                user_form: {
                    ...state.user_form,
                    gender: action.item.gender,
                    phone: action.item.phone,
                    zipcode: action.item.zipcode,
                    dateOfBirth: action.item.dateOfBirth,    
            }
        }
        default:
            return state;
    }
}

export default reducer;