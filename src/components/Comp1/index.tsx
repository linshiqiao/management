// import "./comp1.scss"
import style from "./comp1.module.scss"
// function Comp1() {
//   return (
//     <div className={style.box}>
//       <p>这是Comp1组件</p>
//     </div>
//   )
// }
const Comp1 = () => {
  return (
    <div className={style.box}>
      <p>这是Comp1组件</p>
    </div>
  )
}
export default Comp1
