import DirectoryActionTypes from "./directory.types";

const INITIAL_STATE = {
    hidden: true,

    sale: {
        title: "sale",
        items: [
            { title: "sale men" },
            { title: "sale women" },
            { title: "view all sale" }
        ]
    },
    men: {
        title: "men",
        items: [
            { title: "new in" },
            { title: "classisc collection" },
            { title: "new in" },
            { title: "new in" },
            { title: "new in" },
        ]
    }
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DirectoryActionTypes.TOGGLE_DIRECTORY_HIDDEN:
            return { ...state, hidden: !state.hidden }
        default:
            return state;
    }
}

export default directoryReducer;