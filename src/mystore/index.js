import { reactive } from 'vue'
 
const store = {
   state: reactive({
       user: localStorage.getItem("logged-user") || ""
   }),
   setUser(value) {
       localStorage.setItem("logged-user", value)
       this.state.user = value;
   },
   removeUser() {
       localStorage.removeItem("logged-user")
       this.state.user = null;
   },
   install(app) {
       const store = this;
       app.config.globalProperties.$store = store;
   }
};
 
export default store