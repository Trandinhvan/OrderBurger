
const stateDefault = {
    burger: { salad: 1, cheese: 1, beef: 1 }, // [{name:'salad',amount:1},{name:'c heese',amount:1},{name:'beef',amount:1}] 
    menu: { salad: 10, cheese: 20, beef: 55 }, 
    total: 85 ,
}

const BaiTapBurgerProducer = (state = stateDefault,action)=>{
    switch (action.type){
        case 'CHON_MON': {
            //thay đổi số lượng.
            let{maMon,amount} = action;
            let burgerUpdate = {...state.burger};
            if(amount === -1 && state.burger[maMon]<1){
                
                return {...state}
            }
            // burgerUpdate[action.maMon] += action.amount;
            burgerUpdate[maMon] += amount 
            state.burger = burgerUpdate;
            //tính tổng tiền.
            state.total += amount* state.menu[maMon];
            return {...state}
        }
        default: return {...state}
    }
}

export default BaiTapBurgerProducer;