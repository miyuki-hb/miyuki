import { pgTable, uuid, text, integer, boolean } from "drizzle-orm/pg-core"
import { timestampToUnix } from "../../utils/time"
import { nanoId } from "../../utils/uuid"

const UserFollowingTable = pgTable("user_following", {
    Id: uuid("id").primaryKey().notNull().$default(() => nanoId()),
    UId: uuid("uid").notNull(),
    FollowingUserId: uuid("following_user_id").notNull(),
    CreatedAt: integer("created_at").notNull().$default(() => timestampToUnix(Date.now())),
    UpdatedAt: integer("updated_at").notNull().$default(() => timestampToUnix(Date.now())).$onUpdate(() => timestampToUnix(Date.now()))
})