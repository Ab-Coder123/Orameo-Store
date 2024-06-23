 import { createContext } from "react" ;
// ملف ال json 
import products from "../../assets/productpage";


export const Usecontext = createContext(null)
//   دي عشان تبقا قيمه افتراضيه لو مش موجدود حاجه تمام  null  وظيفه ال سطر دا انه هو بيشاعدك علي انه يمرر ليك ال البينات ال منوجوده ف الملف بروداكت باكدج دا من خلاله و القيمه 

const Usecontextprovider = (props) => {
    const ContextValue = {products}
  return(
    <>  
      <Usecontext.Provider value={ContextValue}>
        {props.children}
      </Usecontext.Provider>
    </>
  )
}



export default Usecontextprovider