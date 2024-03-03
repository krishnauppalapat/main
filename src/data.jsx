import React from "react";

function Data(jasi){
    console.log(jasi);
    return(
        <div>
            {
              jasi.data1.map((a)=>{
                return(
                    <div>
                        <h1>{a}</h1>
                    </div>
                )
              })  
            }
        </div>
    )
}

export default Data
