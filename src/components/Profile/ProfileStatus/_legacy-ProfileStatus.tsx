export default 1
// import React from "react";
//
// type StateType = {
//     editMode: boolean
//     status: string
// }
//
// type PropsType = {
//     status: string
//     updateStatus: (status: string) => void
// }
//
// export class ProfileStatus extends React.Component<PropsType> {
//
//     state: StateType = {
//         editMode: false,
//         status: this.props.status
//     }
//
//     componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
//         if (prevProps.status !== this.props.status) {
//             this.setState({status: this.props.status})
//         }
//     }
//
//     activateEditMode = () => {
//         this.setState({editMode: true} as StateType)
//     }
//
//     deactivateEditMode = () => {
//         this.setState({editMode: false} as StateType)
//         this.props.updateStatus(this.state.status)
//     }
//
//     onChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
//         this.setState({status: e.target.value} as StateType)
//     }
//
//     render() {
//         return (
//             <div>
//                 {!this.state.editMode &&
//                 <div>
//                     <span onDoubleClick={this.activateEditMode}>{this.props.status || "no status"}</span>
//                 </div>}
//                 {this.state.editMode &&
//                 <div>
//                     <input onChange={this.onChangeStatus} value={this.state.status} type="text"
//                            onBlur={this.deactivateEditMode} autoFocus/>
//                 </div>}
//             </div>
//         )
//     }
// }