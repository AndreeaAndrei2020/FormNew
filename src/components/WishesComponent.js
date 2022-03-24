import React,{Component} from 'react'
import WishComponent from './WishComponent'
class WishesComponent extends Component{

    render() {
        return (
            <div >
                {
                    this.props.wishes.map((wish) =>{
                        return <WishComponent deleteWish={this.props.deleteWish} editWish={this.props.editWish} startwish={this.props.startwish} money={wish.money} id={wish.id} finishWish={wish.finishWish} functionFinishWish={this.props.finishWish} wishText={wish.wishText} edit={wish.edit} editInputWish={this.props.editInputWish} setUpdateWish={this.props.setUpdateWish} />
                    })
                }
            </div>
        )
    }
}

export default WishesComponent
