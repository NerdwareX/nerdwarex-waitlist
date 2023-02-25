import UAuth from '@uauth/js'
import { motion } from "framer-motion";

function LoginDemo(){
  const uauth = new UAuth({
    clientID: "e8e4f26c-3b4c-4840-8951-9636717f4fe9",
    redirectUri: "https://www.nerdwarex.com",
    scope: "openid wallet email profile:optional social:optional"
  })

  const login = () => {
    uauth.loginWithPopup().then((authorization)=>{console.log(authorization)})
  }

  const logout = () => {
    uauth.logout()
  }

  return(
    <div id="LoginDemoArea">
        <motion.button
                className="px-[23px] py-2 btn-primary rounded-[20px] text-white flex mx-auto font-medium"
                onClick={login}
                whileTap={{ scale: 0.9 }}
              >
                Unstoppable Domain
        </motion.button>
         <br/>
        <motion.button 
          variant="danger" 
          onClick={logout}
          className="px-[23px] py-2 btn-primary rounded-[20px] text-white flex mx-auto font-medium"
          whileTap={{ scale: 0.9 }}
          >
            Logout
        </motion.button>
    </div>

  )




}

export default LoginDemo;