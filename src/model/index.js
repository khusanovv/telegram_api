
import { Channel } from "./channel.model.js";
import { Group } from "./gruops.model.js";
import { Group_Order } from "./gruops.order.js";
import { Orders } from "./order.js";
import { User } from "./users.medel.js";

User.belongsToMany(Group,{ through: Orders, foreignKey: "user_id"})
Group.belongsToMany(User,{ through: Orders, foreignKey:"group_id"})
User.belongsToMany(Channel,{ through: Orders, foreignKey: "user_id"})
Channel.belongsToMany(User,{ through: Orders, foreignKey:"channel_id"})


await User.sync({alter:true})
await Group.sync({alter:true})
await Orders.sync({alter:true})
await Group_Order.sync({alter:true})
await Channel.sync({alter:true})

export {User, Group, Channel}
 