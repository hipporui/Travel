export default {
    changeCity(state, city) {
        state.city = city;
        localStorage.city = city
            // try {
            //     if (localStorage.city) {

        //     }
        // } catch (e) {}
    }

}