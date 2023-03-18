import checkNumInputs from "./checkNumInputs.js";

const changeModalState = (state) => {
    const windowShape = document.querySelectorAll('.balcon_icons_img');
    const windowWidth = document.querySelectorAll('#width');
    const windowHeight = document.querySelectorAll('#height');
    const windowType = document.querySelectorAll('#view_type');
    const windowProfile = document.querySelectorAll('.checkbox');
    
    checkNumInputs('#width');
    checkNumInputs('#height');
    
    const bindActionToElems = (event, element, prop) => {
        element.forEach((item, i) => {
            item.addEventListener(event, () => {
                
                switch (item.nodeName) {
                    case 'SPAN' :
                        state[prop] = i;
                        break;
                    case 'INPUT' :
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = 'cold' : state[prop] = 'warm';
                            element.forEach((checkbox, j) => {
                                checkbox.checked = false;
                                checkbox.checked = i === j;
                            });
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT' :
                        state[prop] = item.value;
                        break;
                }
            });
        });
    }
    
    bindActionToElems('click', windowShape, 'shape');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');
    
}

export default changeModalState;