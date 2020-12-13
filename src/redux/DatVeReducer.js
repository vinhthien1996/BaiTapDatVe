const stateVe = {
    gheDangDat: []
}

export const DatVeReducer = (state = stateVe, action) => {
    switch (action.type) {
        case 'DAT_GHE': {
            let stateUpdate = [...state.gheDangDat];
            let index = stateUpdate.findIndex(ghe => ghe.soGhe === action.datGhe.soGhe);
            if (index !== -1) {
                stateUpdate.splice(index, 1);
            } else {
                stateUpdate.push(action.datGhe);
            }
            state.gheDangDat = stateUpdate;
            return { ...state };
        }
        case 'HUY_GHE': {
            let stateUpdate = [...state.gheDangDat];
            let index = stateUpdate.findIndex(ghe => ghe.soGhe === action.soGhe);
            if (index !== -1) {
                stateUpdate.splice(index, 1);
            }
            state.gheDangDat = stateUpdate;
            return { ...state };
        }
    }

    return state;
}