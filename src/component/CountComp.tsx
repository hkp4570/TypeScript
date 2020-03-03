import React from 'react';
interface ipProps {
    num:number,
    onChange?:(n:number)=>void
}
interface ipState{
    msg:string,
    description:string,
}

//类组件约束  第一个泛型约束变量，第二个泛型约束状态
export default class CountComp extends React.Component<ipProps,ipState>{
    constructor(props:ipProps){
        super(props);
        this.state={
           msg:'',
            description:''
        }
    }
    render(){
        return(
            <div>
                <button onClick={()=>{
                    if(this.props.onChange){
                        this.props.onChange(this.props.num - 1)
                    }
                }}>-</button>
                <div>{this.props.num}</div>
                <button onClick={()=>{
                    if(this.props.onChange){
                        this.props.onChange(this.props.num + 1)
                    }
                }}>+</button>
            </div>
        )
    }
}

//函数组件约束
// const CountComp:React.FC<ipProps> = (props) => {
//   return(
//     <div>
//       <button onClick={()=>{
//           if(props.onChange){
//               props.onChange(props.num - 1)
//           }
//       }}>-</button>
//         <div>{props.num}</div>
//       <button onClick={()=>{
//           if(props.onChange){
//               props.onChange(props.num + 1)
//           }
//       }}>+</button>
//     </div>
//   )
// };
// export default CountComp;
