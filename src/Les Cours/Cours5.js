    //////////////////////////// 
   //                        //
  //   Hooks : (useState)   //
 //                        //
////////////////////////////


import { useState } from "react"

export default function MyHooks({step , first}) {
// ila beghayti nta li dakhel l are9ame mn index.js khasek te7athom fi MyHooks o te7athom fi blaset l are9ame 
   
    const [count , setCount] = useState(step)   // waset mn had useState kadire la valeur li ghadi tbeda biha count 
    // useState : kanjiboha mn react o lwaset ma bin a9ewase kandiro valeur par defaut   
    // count : semya dial les variable kan recepairiw mneha la valeur (hadi hia l valeur li ghadi tbadel)
    // setCount : katkon be7al function kan changiw mnha la valeur  (hia li kanebadelo biha dik l valeur)    
    return <>
        <hr/><hr/> Cours5 <hr/><hr/>
        <p> Your many is {count} Million </p>


        {/* hena f had l button derena mli y warek 3eliha y be9a y zide b wahede  */}
        <button onClick={() => {
            setCount(
                prevState => {
                    return prevState + first
                }
            )
        }}>
            Plus +1
        </button>

        <br />

        {/* f had l button derena mli y warek 3eliha ghadi y be9a yne9ose lik bi wahede 1 */}
        <button onClick={() => {
            setCount(
                prevState => {
                    return prevState - 1
                }
            )
        }}>
            Moins -1
        </button>

        <br />

        {/* f had l button derena mli y warek 3eliha ghadi y afichi lik 0 fi count  */}
        <button onClick={() => {
            setCount(
                prevState => {
                    return prevState = 0
                }
            )
        }}> 
            Rest = 0
        </button>

        <br />

        {/* f had l button ghadi y derabe lik ra9em fi 2  */}
        <button onClick={() => {
            setCount(
                prevState => {
                    return prevState * 2
                }
            )
        }}>
            * 2 
        </button>
    </>
}